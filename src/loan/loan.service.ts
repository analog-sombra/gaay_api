import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LoanService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserCurrentLoan(id: number) {
    const date = new Date();
    try {
      const loan_data = await this.prisma.loan.findFirst({
        where: {
          farmerid: id,
          deletedAt: null,
          status: 'ACTIVE',
          start_date: {
            lte: date,
          },
          end_date: {
            gte: date,
          },
        },
        include: {
          farmer: true,
        },
      });

      if (!loan_data) {
        throw new BadGatewayException(
          'This user currently does not have any active loan',
        );
      }

      return loan_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
