import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateDashboardInput } from './dto/create-dashboard.input';
import { UpdateDashboardInput } from './dto/update-dashboard.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashbordData() {
    try {
      const cows = await this.prisma.cow.count({
        where: {
          deletedAt: null,
          deletedById: null,
        },
      });
      const venders = await this.prisma.user.count({
        where: {
          NOT: {
            role: 'FARMER',
          },
          deletedAt: null,
        },
      });
      const user = await this.prisma.user.count({
        where: {
          role: 'FARMER',
          deletedAt: null,
        },
      });
      const medical = await this.prisma.medical_request.count({
        where: {
          deletedAt: null,
          deletedById: null,
          NOT: {
            medicalStatus: 'RESOLVED',
          },
        },
      });
      const dashboardData = {
        cows,
        venders,
        user,
        medical,
      };
      return dashboardData;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async treatmentGraph(year: string) {
    try {
      const treatments = await this.prisma.medical_request.findMany({
        where: {
          createdAt: {
            gte: new Date(`${year}-01-01`),
            lte: new Date(`${year}-12-31`),
          },
        },
        select: {
          createdAt: true,
        },
      });

      const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const monthlyCount: Record<number, number> = {};

      for (const treatment of treatments) {
        const monthIndex = treatment.createdAt.getMonth(); // 0-based index
        monthlyCount[monthIndex] = (monthlyCount[monthIndex] || 0) + 1;
      }

      const monthlyData = months.map((month, index) => ({
        month,
        count: monthlyCount[index] || 0,
      }));

      return { monthlyData };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async cowReport() {
    const cows = await this.prisma.cow.findMany({
      where: {
        deletedAt: null,
        deletedById: null,
      },
      include: {
        farmer: true, // equivalent of LEFT JOIN user
        calf_birth: {
          include: {
            mothercow: true, // mother cow of the calf
            calf: true, // calf born to this cow
          },
        },
        mothercow_birth: {
          include: {
            calf: true, // calf born to this cow
            mothercow: true, // mother cow of the calf
          },
        },
      },
      orderBy: {
        farmer: {
          beneficiary_code: 'asc',
        },
      },
    });

    const result = cows.map((cow) => {
      const noOfCalves = cow.mothercow_birth.length;
      const bullCalves = cow.mothercow_birth.filter(
        (b) => b.calf.sex?.toLowerCase() === 'male',
      ).length;
      const heiferCalves = cow.mothercow_birth.filter(
        (b) => b.calf.sex?.toLowerCase() === 'female',
      ).length;

      return {
        beneficiary_code: cow.farmer?.beneficiary_code || null,
        name: cow.farmer?.name || null,
        cowtagno: cow.cowtagno,
        cowname: cow.cowname,
        alias: cow.alias,
        sex: cow.sex,
        birthdate: cow.birthdate,
        weight: cow.weight,
        daily_milk_produce: cow.daily_milk_produce,
        cowstatus: cow.cowstatus,
        death_date: cow.death_date,
        death_reason: cow.death_reason,
        Beneficiary_Contact: cow.farmer?.contact || null,
        beneficiary_type: cow.farmer?.beneficiary_type || null,
        cow_count: cow.farmer?.cow_count || null,
        no_of_calves: noOfCalves,
        bull_calves: bullCalves,
        heifer_calves: heiferCalves,
        mother_id: cow.mothercow_birth?.[0]?.mothercow?.id || null,
        mother_cowtagno: cow.mothercow_birth?.[0]?.mothercow?.cowtagno || null,
      };
    });

    return result;
  }
  async userReport() {
    const users = await this.prisma.user.findMany({
      where: {
        deletedAt: null,
        role: 'FARMER',
      },
      orderBy: {
        beneficiary_code: 'asc',
      },
      include: {
        loan: {
          orderBy: {
            start_date: 'desc',
          },
          take: 1,
        },
        cow: {
          select: {
            id: true,
            cowstatus: true,
            sex: true,
          },
        },
      },
    });

    // Post-processing in TypeScript
    const result = await Promise.all(
      users.map(async (user) => {
        const cows = user.cow;
        const numberOfCows = cows.length;
        const aliveCows = cows.filter(
          (c) => c.cowstatus?.toLowerCase() === 'alive',
        ).length;
        const soldCows = cows.filter(
          (c) => c.cowstatus?.toLowerCase() === 'sold',
        ).length;
        const deadCows = cows.filter(
          (c) => c.cowstatus?.toLowerCase() === 'dead',
        ).length;

        const births = await this.prisma.birth.findMany({
          where: {
            mothercow: {
              farmerid: user.id,
            },
            deletedAt: null,
            deletedById: null,
          },
          include: {
            calf: true,
          },
        });

        const numberOfCalves = births.length;
        const maleCalves = births.filter(
          (b) => b.calf?.sex?.toLowerCase() === 'male',
        ).length;
        const femaleCalves = births.filter(
          (b) => b.calf?.sex?.toLowerCase() === 'female',
        ).length;

        const loan = user.loan?.[0];

        return {
          beneficiary_code: user.beneficiary_code,
          name: user.name,
          alias: user.alias,
          contact: user.contact,
          contact_two: user.contact_two,
          beneficiary_type: user.beneficiary_type,
          address: user.address,
          village: user.village,
          district: user.district,
          status: user.status,
          loan_id: loan?.loan_id,
          amount: loan?.amount,
          start_date: loan?.start_date,
          end_date: loan?.end_date,
          emi_amount: loan?.emi_amount,
          emi_date: loan?.emi_date,
          number_of_cows: numberOfCows,
          alive_cows: aliveCows,
          sold_cows: soldCows,
          dead_cows: deadCows,
          no_of_calves: numberOfCalves,
          number_of_male_calves: maleCalves,
          number_of_female_calves: femaleCalves,
        };
      }),
    );

    return result;
  }

  async dashboardMedicalReport() {
    try {
      const total = await this.prisma.medical_request.count({
        where: {
          deletedAt: null,
          deletedById: null,
        },
      });

      const created = await this.prisma.medical_request.count({
        where: {
          medicalStatus: 'CREATED',
          deletedAt: null,
          deletedById: null,
        },
      });

      const scheduled = await this.prisma.medical_request.count({
        where: {
          medicalStatus: 'SCHEDULED',
          deletedAt: null,
          deletedById: null,
        },
      });
      const completed = await this.prisma.medical_request.count({
        where: {
          medicalStatus: 'RESOLVED',
          deletedAt: null,
          deletedById: null,
        },
      });

      const today = new Date();
      today.setUTCHours(0, 0, 0, 0); // Set time to start of the day

      // for late it's scheduled but date is less than today

      const late = await this.prisma.medical_request.count({
        where: {
          medicalStatus: 'SCHEDULED',
          deletedAt: null,
          deletedById: null,
          scheduled_date: {
            lt: today,
          },
        },
      });

      const dashboardCowReportData = {
        total,
        create: created,
        schedule: scheduled,
        completed,
        late,
      };
      return dashboardCowReportData;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async dashboardUserReport() {
    try {
      const iddp = await this.prisma.user.findMany({
        where: {
          deletedAt: null,
          role: 'FARMER',
          beneficiary_type: 'IDDP',
        },
      });

      const ssdu = await this.prisma.user.findMany({
        where: {
          deletedAt: null,
          role: 'FARMER',
          beneficiary_type: 'SSDU',
        },
      });

      const total = await this.prisma.user.findMany({
        where: {
          deletedAt: null,
          role: 'FARMER',
        },
      });

      const dashboardUserReportData = {
        iddp: iddp.length,
        iddp_cow_count: iddp.reduce(
          (acc, user) => acc + (user.cow_count || 0),
          0,
        ),
        ssdu: ssdu.length,
        ssdu_cow_count: ssdu.reduce(
          (acc, user) => acc + (user.cow_count || 0),
          0,
        ),
        total: total.length,
        withcows: total.reduce((acc, user) => acc + (user.cow_count || 0), 0),
      };
      return dashboardUserReportData;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async dashboardCowReport() {
    try {
      const total = await this.prisma.cow.count({
        where: {
          deletedAt: null,
          deletedById: null,
        },
      });
      const alive = await this.prisma.cow.count({
        where: {
          cowstatus: 'ALIVE',
          deletedAt: null,
          deletedById: null,
        },
      });
      const dead = await this.prisma.cow.count({
        where: {
          cowstatus: 'DEAD',
          deletedAt: null,
          deletedById: null,
        },
      });
      const sold = await this.prisma.cow.count({
        where: {
          cowstatus: 'SOLD',
          deletedAt: null,
          deletedById: null,
        },
      });

      const cows = await this.prisma.birth.findMany({
        where: {
          deletedAt: null,
          deletedById: null,
        },
        include: {
          calf: true,
        },
      });

      const heifer = cows.filter((birth) => birth.calf?.sex === 'FEMALE');
      const calf = cows.filter((birth) => birth.calf?.sex === 'MALE');

      // cow who is not in birth table
      const cowAlive = await this.prisma.cow.count({
        where: {
          cowstatus: 'ALIVE',
          deletedAt: null,
          deletedById: null,
          NOT: {
            id: {
              in: cows.map((birth) => birth.calfid),
            },
          },
        },
      });

      const cowDead = await this.prisma.cow.count({
        where: {
          cowstatus: 'DEAD',
          deletedAt: null,
          deletedById: null,
          NOT: {
            id: {
              in: cows.map((birth) => birth.calfid),
            },
          },
        },
      });

      const dashboardCowReportData = {
        total,
        alive,
        dead,
        sold,
        heifer: heifer.length,
        calf: calf.length,
        cow_alive: cowAlive,
        cow_dead: cowDead,
      };

      return dashboardCowReportData;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
