import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMedicalInput } from './dto/create-medical.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchMedicalPaginationInput } from './dto/search-medical-pagination.input';

@Injectable()
export class MedicalService {
  constructor(private readonly prisma: PrismaService) {}

  async createMedical(createMedicalInput: CreateMedicalInput) {
    try {
      const medical_data = await this.prisma.medical_request.create({
        data: {
          cowid: createMedicalInput.cowid,
          reason: createMedicalInput.reason,
          farmerid: createMedicalInput.farmerid,
          createdById: createMedicalInput.farmerid,
          date: new Date(),
          status: 'ACTIVE',
        },
      });
      if (!medical_data) {
        throw new BadGatewayException('Medical request not created');
      }
      return medical_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async searchMedicalRequest(
    SearchMedicalPaginationInput: SearchMedicalPaginationInput,
  ) {
    try {
      const { skip, take, search } = SearchMedicalPaginationInput;
      const medical_data = await this.prisma.medical_request.findMany({
        where: {
          ...(search && {
            OR: [
              {
                cow: {
                  cowname: {
                    contains: search || undefined,
                  },
                },
              },
              {
                cow: {
                  alias: {
                    contains: search || undefined,
                  },
                },
              },
              {
                farmer: {
                  name: {
                    contains: search || undefined,
                  },
                },
              },
              {
                farmer: {
                  contact: {
                    contains: search || undefined,
                  },
                },
              },
            ],
          }),
        },
        skip,
        take,
        include: {
          cow: true,
          farmer: true,
        },
      });
      const total = await this.prisma.medical_request.count({
        where: {
          ...(search && {
            OR: [
              {
                cow: {
                  cowname: {
                    contains: search || undefined,
                  },
                },
              },
              {
                cow: {
                  alias: {
                    contains: search || undefined,
                  },
                },
              },
              {
                farmer: {
                  name: {
                    contains: search || undefined,
                  },
                },
              },
              {
                farmer: {
                  contact: {
                    contains: search || undefined,
                  },
                },
              },
            ],
          }),
        },
      });
      return { data: medical_data, total, skip, take };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
