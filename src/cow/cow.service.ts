import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCowInput } from './dto/create-cow.input';
import { UpdateCowInput } from './dto/update-cow.input';
import { CreateCowCalfInput } from './dto/create-cow-calf.input';
import { SearchCowPaginationInput } from './dto/search-cow-pagination.input';

@Injectable()
export class CowService {
  constructor(private readonly prisma: PrismaService) {}

  async getCowById(id: number) {
    try {
      const cow_data = await this.prisma.cow.findUnique({
        where: {
          id: id,
        },
        include: {
          breed: true,
          farmer: true,
          insurance: true,
          cow_health_report: {
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      });

      if (!cow_data) {
        throw new BadGatewayException('Cow not found');
      }
      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async createCow(createCowInput: CreateCowInput) {
    try {
      console.log('createCowInput', createCowInput);
      const cow_data = await this.prisma.cow.create({
        data: {
          farmerid: createCowInput.farmerid,
          cowtagno: createCowInput.cowtagno,
          cowname: createCowInput.cowname,
          alias: createCowInput.alias,
          photocover: createCowInput.photocover,
          photo1: createCowInput.photo1,
          photo2: createCowInput.photo2,
          photo3: createCowInput.photo3,
          photo4: createCowInput.photo4,
          breedid: createCowInput.breedid,
          sex: createCowInput.sex,
          birthdate: createCowInput.birthdate.toISOString(),
          noofcalves: createCowInput.noofcalves,
          weight: createCowInput.weight,
          createdById: createCowInput.farmerid,
          daily_milk_produce: createCowInput.daily_milk_produce,
          cowstatus: createCowInput.cowstatus,
          // death_date
          ...(createCowInput.cowstatus === 'DEAD' && {
            death_date: createCowInput.death_date!.toISOString(),
          }),

          ...(createCowInput.cowstatus === 'SOLD' && {
            sold_date: createCowInput.sold_date!.toISOString(),
            sold_price: createCowInput.sold_price,
            sold_to: createCowInput.sold_to,
            sold_contact: createCowInput.sold_contact,
          }),
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Cow not created');
      }
      if (createCowInput.cowstatus === 'ALIVE') {
        const cow_health_report = await this.prisma.cow_health_report.create({
          data: {
            cowid: cow_data.id,
            createdById: createCowInput.farmerid,
            ...(createCowInput.black_quarter_date && {
              black_quarter_date:
                createCowInput.black_quarter_date!.toISOString(),
            }),
            ...(createCowInput.brucellossis_date && {
              brucellossis_date:
                createCowInput.brucellossis_date!.toISOString(),
            }),
            ...(createCowInput.food_and_mouth_date && {
              food_and_mouth_date:
                createCowInput.food_and_mouth_date!.toISOString(),
            }),
            ...(createCowInput.hemorrhagic_septicemia_date && {
              hemorrhagic_septicemia_date:
                createCowInput.hemorrhagic_septicemia_date!.toISOString(),
            }),
            ...(createCowInput.last_calf_birthdate && {
              last_calf_birthdate:
                createCowInput.last_calf_birthdate!.toISOString(),
            }),
            ...(createCowInput.last_deworming_date && {
              last_deworming_date:
                createCowInput.last_deworming_date!.toISOString(),
            }),
            ...(createCowInput.last_sickness_date && {
              last_sickness_date:
                createCowInput.last_sickness_date!.toISOString(),
            }),
            ...(createCowInput.last_treatment_date && {
              last_treatment_date:
                createCowInput.last_treatment_date!.toISOString(),
            }),
            ...(createCowInput.last_vaccine_date && {
              last_vaccine_date:
                createCowInput.last_vaccine_date!.toISOString(),
            }),
            ...(createCowInput.heat_period && {
              heat_period: createCowInput.heat_period!.toISOString(),
            }),
          },
        });

        if (!cow_health_report) {
          throw new BadGatewayException('Cow health report not created');
        }
      }

      if (
        createCowInput.insurance_id != null &&
        createCowInput.insurance_id != undefined &&
        createCowInput.insurance_id != ''
      ) {
        const cow_insurance = await this.prisma.insurance.create({
          data: {
            cowid: cow_data.id,
            createdById: createCowInput.farmerid,
            insurance_id: createCowInput.insurance_id,
            insurance_name: createCowInput.insurance_name,
            insurance_type: createCowInput.insurance_type,
            insurance_amount: createCowInput.insurance_amount,
            insurance_date: createCowInput.insurance_date!.toISOString(),
            insurance_renewal_date:
              createCowInput.insurance_renewal_date!.toISOString(),
            premium_amount: createCowInput.premium_amount,
            insurance_renewal_amount: createCowInput.insurance_renewal_amount,
          },
        });

        if (!cow_insurance) {
          throw new BadGatewayException('Cow insurance not created');
        }
      }

      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async createCowCalf(createCowCalfInput: CreateCowCalfInput) {
    try {
      const cow_data = await this.prisma.cow.create({
        data: {
          farmerid: createCowCalfInput.farmerid,
          cowtagno: createCowCalfInput.cowtagno,
          cowname: createCowCalfInput.cowname,
          alias: createCowCalfInput.alias,
          photocover: createCowCalfInput.photocover,
          photo1: createCowCalfInput.photo1,
          photo2: createCowCalfInput.photo2,
          photo3: createCowCalfInput.photo3,
          photo4: createCowCalfInput.photo4,
          breedid: createCowCalfInput.breedid,
          sex: createCowCalfInput.sex,
          birthdate: createCowCalfInput.birthdate.toISOString(),
          noofcalves: createCowCalfInput.noofcalves,
          weight: createCowCalfInput.weight,
          createdById: createCowCalfInput.farmerid,
          daily_milk_produce: createCowCalfInput.daily_milk_produce,
          cowstatus: createCowCalfInput.cowstatus,
          // death_date
          ...(createCowCalfInput.cowstatus === 'DEAD' && {
            death_date: createCowCalfInput.death_date!.toISOString(),
          }),

          ...(createCowCalfInput.cowstatus === 'SOLD' && {
            sold_date: createCowCalfInput.sold_date!.toISOString(),
            sold_price: createCowCalfInput.sold_price,
            sold_to: createCowCalfInput.sold_to,
            sold_contact: createCowCalfInput.sold_contact,
          }),
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Cow not created');
      }

      if (createCowCalfInput.cowstatus === 'ALIVE') {
        const cow_health_report = await this.prisma.cow_health_report.create({
          data: {
            cowid: cow_data.id,
            createdById: createCowCalfInput.farmerid,
            ...(createCowCalfInput.black_quarter_date && {
              black_quarter_date:
                createCowCalfInput.black_quarter_date!.toISOString(),
            }),
            ...(createCowCalfInput.brucellossis_date && {
              brucellossis_date:
                createCowCalfInput.brucellossis_date!.toISOString(),
            }),
            ...(createCowCalfInput.food_and_mouth_date && {
              food_and_mouth_date:
                createCowCalfInput.food_and_mouth_date!.toISOString(),
            }),
            ...(createCowCalfInput.hemorrhagic_septicemia_date && {
              hemorrhagic_septicemia_date:
                createCowCalfInput.hemorrhagic_septicemia_date!.toISOString(),
            }),
            ...(createCowCalfInput.last_calf_birthdate && {
              last_calf_birthdate:
                createCowCalfInput.last_calf_birthdate!.toISOString(),
            }),
            ...(createCowCalfInput.last_deworming_date && {
              last_deworming_date:
                createCowCalfInput.last_deworming_date!.toISOString(),
            }),
            ...(createCowCalfInput.last_sickness_date && {
              last_sickness_date:
                createCowCalfInput.last_sickness_date!.toISOString(),
            }),
            ...(createCowCalfInput.last_treatment_date && {
              last_treatment_date:
                createCowCalfInput.last_treatment_date!.toISOString(),
            }),
            ...(createCowCalfInput.last_vaccine_date && {
              last_vaccine_date:
                createCowCalfInput.last_vaccine_date!.toISOString(),
            }),
            ...(createCowCalfInput.heat_period && {
              heat_period: createCowCalfInput.heat_period!.toISOString(),
            }),
          },
        });

        if (!cow_health_report) {
          throw new BadGatewayException('Cow health report not created');
        }
      }

      if (
        createCowCalfInput.insurance_id != null &&
        createCowCalfInput.insurance_id != undefined &&
        createCowCalfInput.insurance_id != ''
      ) {
        const cow_insurance = await this.prisma.insurance.create({
          data: {
            cowid: cow_data.id,
            createdById: createCowCalfInput.farmerid,
            insurance_id: createCowCalfInput.insurance_id,
            insurance_name: createCowCalfInput.insurance_name,
            insurance_type: createCowCalfInput.insurance_type,
            insurance_amount: createCowCalfInput.insurance_amount,
            insurance_date: createCowCalfInput.insurance_date!.toISOString(),
            insurance_renewal_date:
              createCowCalfInput.insurance_renewal_date!.toISOString(),
            premium_amount: createCowCalfInput.premium_amount,
            insurance_renewal_amount:
              createCowCalfInput.insurance_renewal_amount,
          },
        });

        if (!cow_insurance) {
          throw new BadGatewayException('Cow insurance not created');
        }
      }

      const cow_calf = await this.prisma.birth.create({
        data: {
          createdById: createCowCalfInput.farmerid,
          mothercowid: createCowCalfInput.cowid,
          calfid: cow_data.id,
          fathercowid: createCowCalfInput.fathercowid,
          remarks: 'Calf born',
        },
      });

      if (!cow_calf) {
        throw new BadGatewayException('Cow calf not created');
      }
      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async updateCow(updateCowInput: UpdateCowInput) {
    try {
      // first get the cow
      const cow_data = await this.prisma.cow.findUnique({
        where: {
          id: updateCowInput.id,
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Cow not found');
      }

      // update cow
      const updated_cow = await this.prisma.cow.update({
        where: {
          id: updateCowInput.id,
        },
        data: {
          cowtagno: updateCowInput.cowtagno,
          cowname: updateCowInput.cowname,
          alias: updateCowInput.alias,
          photocover: updateCowInput.photocover,
          photo1: updateCowInput.photo1,
          photo2: updateCowInput.photo2,
          photo3: updateCowInput.photo3,
          photo4: updateCowInput.photo4,
          breedid: updateCowInput.breedid,
          sex: updateCowInput.sex,
          birthdate: updateCowInput.birthdate!.toISOString(),
          noofcalves: updateCowInput.noofcalves,
          weight: updateCowInput.weight,
          daily_milk_produce: updateCowInput.daily_milk_produce,
          cowstatus: updateCowInput.cowstatus,
          ...(updateCowInput.cowstatus === 'DEAD' && {
            death_date: updateCowInput.death_date!.toISOString(),
          }),
          ...(updateCowInput.cowstatus === 'SOLD' && {
            sold_date: updateCowInput.sold_date!.toISOString(),
            sold_price: updateCowInput.sold_price,
            sold_to: updateCowInput.sold_to,
            sold_contact: updateCowInput.sold_contact,
          }),
        },
        include: {
          cow_health_report: {
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      });

      if (!updated_cow) {
        throw new BadGatewayException('Cow not updated');
      }

      if (
        updateCowInput.cowstatus === 'ALIVE' &&
        updated_cow.cow_health_report.length > 0
      ) {
        const cow_health_report = await this.prisma.cow_health_report.update({
          where: {
            id: updated_cow.cow_health_report[0].id,
          },
          data: {
            cowid: cow_data.id,
            createdById: updateCowInput.farmerid,
            ...(updateCowInput.black_quarter_date && {
              black_quarter_date:
                updateCowInput.black_quarter_date!.toISOString(),
            }),
            ...(updateCowInput.brucellossis_date && {
              brucellossis_date:
                updateCowInput.brucellossis_date!.toISOString(),
            }),
            ...(updateCowInput.food_and_mouth_date && {
              food_and_mouth_date:
                updateCowInput.food_and_mouth_date!.toISOString(),
            }),
            ...(updateCowInput.hemorrhagic_septicemia_date && {
              hemorrhagic_septicemia_date:
                updateCowInput.hemorrhagic_septicemia_date!.toISOString(),
            }),
            ...(updateCowInput.last_calf_birthdate && {
              last_calf_birthdate:
                updateCowInput.last_calf_birthdate!.toISOString(),
            }),
            ...(updateCowInput.last_deworming_date && {
              last_deworming_date:
                updateCowInput.last_deworming_date!.toISOString(),
            }),
            ...(updateCowInput.last_sickness_date && {
              last_sickness_date:
                updateCowInput.last_sickness_date!.toISOString(),
            }),
            ...(updateCowInput.last_treatment_date && {
              last_treatment_date:
                updateCowInput.last_treatment_date!.toISOString(),
            }),
            ...(updateCowInput.last_vaccine_date && {
              last_vaccine_date:
                updateCowInput.last_vaccine_date!.toISOString(),
            }),
            ...(updateCowInput.heat_period && {
              heat_period: updateCowInput.heat_period!.toISOString(),
            }),
          },
        });

        if (!cow_health_report) {
          throw new BadGatewayException('Cow health report not created');
        }
      }

      // update cow insurance
      const cow_insurance = await this.prisma.insurance.updateMany({
        where: {
          cowid: cow_data.id,
        },
        data: {
          insurance_id: updateCowInput.insurance_id,
          insurance_name: updateCowInput.insurance_name,
          insurance_type: updateCowInput.insurance_type,
          insurance_amount: updateCowInput.insurance_amount,
          insurance_date: updateCowInput.insurance_date!.toISOString(),
          insurance_renewal_date:
            updateCowInput.insurance_renewal_date!.toISOString(),
          premium_amount: updateCowInput.premium_amount,
          insurance_renewal_amount: updateCowInput.insurance_renewal_amount,
        },
      });

      if (!cow_insurance) {
        throw new BadGatewayException('Cow insurance not updated');
      }

      return updated_cow;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async searchCows(searchCowPaginationInput: SearchCowPaginationInput) {
    try {
      const { search, skip, take } = searchCowPaginationInput;

      const cows = await this.prisma.cow.findMany({
        where: {
          ...(search && {
            OR: [
              {
                cowname: {
                  contains: search || undefined,
                },
              },
              {
                alias: {
                  contains: search || undefined,
                },
              },
              {
                farmer: {
                  name: {
                    contains: search || undefined,
                  },
                  status: 'ACTIVE',
                },
              },
            ],
          }),
          status: 'ACTIVE',
          deletedAt: null,
          deletedById: null,
        },
        include: {
          breed: true,
          cow_health_report: true,
          farmer: true,
        },
        skip: skip,
        take: take,
      });

      if (!cows) {
        throw new BadGatewayException('Cows not found');
      }
      const total = await this.prisma.cow.count({
        where: {
          ...(search && {
            OR: [
              {
                cowname: {
                  contains: search || undefined,
                },
              },
              {
                alias: {
                  contains: search || undefined,
                },
              },
              {
                farmer: {
                  name: {
                    contains: search || undefined,
                  },
                  status: 'ACTIVE',
                },
              },
            ],
          }),
          status: 'ACTIVE',
          deletedAt: null,
          deletedById: null,
        },
      });
      const cowPagination = {
        data: cows,
        total: total,
        skip: skip,
        take: take,
      };
      return cowPagination;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
