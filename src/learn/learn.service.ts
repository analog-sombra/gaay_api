import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateLearnInput } from './dto/create-learn.input';
import { UpdateLearnInput } from './dto/update-learn.input';
import { PrismaService } from 'prisma/prisma.service';

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
}
