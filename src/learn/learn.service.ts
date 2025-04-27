import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SearchLearnPaginationInput } from './dto/search-learn-pagination';

@Injectable()
export class LearnService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLearn() {
    try {
      const learn_data = await this.prisma.learning.findMany({
        where: {
          deletedAt: null,
        },
      });

      if (!learn_data) {
        throw new BadGatewayException('No learning data found');
      }

      return learn_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async searchLearn(searchLearnPaginationInput: SearchLearnPaginationInput) {
    try {
      const { skip, take, search, learn } = searchLearnPaginationInput;

      const [data, total] = await this.prisma.$transaction([
        this.prisma.learning.findMany({
          where: {
            ...(search && {
              OR: [{ title: { contains: search || undefined } }],
            }),
            ...(learn && {
              type: learn,
            }),
            deletedAt: null,
          },
          skip,
          take,
        }),
        this.prisma.learning.count({
          where: {
            ...(search && {
              OR: [{ title: { contains: search || undefined } }],
            }),
            ...(learn && {
              type: learn,
            }),
            deletedAt: null,
          },
        }),
      ]);

      return {
        data,
        total,
        skip,
        take,
      };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
