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
}
