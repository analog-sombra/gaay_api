import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMedicalInput } from './dto/create-medical.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchMedicalPaginationInput } from './dto/search-medical-pagination.input';
import { AddDoctorInput } from './dto/add-doctor.input';
import { CompleteMedicalInput } from './dto/complete-medical.input';

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
          medicalStatus: 'CREATED',
          complaint_no: Math.floor(Date.now() / 1000).toString(),
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

  async getMedicalRequestById(id: number) {
    try {
      const medical_data = await this.prisma.medical_request.findUnique({
        where: { id },
        include: {
          cow: {
            include: {
              breed: true,
            },
          },
          doctor: true,
          farmer: true,
        },
      });
      if (!medical_data) {
        throw new BadGatewayException('Medical request not found');
      }
      return medical_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async addDoctor(addDoctorInput: AddDoctorInput) {
    try {
      const isexists = await this.prisma.medical_request.findUnique({
        where: { id: addDoctorInput.id },
      });
      if (!isexists) {
        throw new BadGatewayException('Medical request not found');
      }

      const medical_data = await this.prisma.medical_request.update({
        where: { id: addDoctorInput.id },
        data: {
          doctorid: addDoctorInput.doctorid,
          scheduled_date: addDoctorInput.scheduled_date,
          medicalStatus: 'SCHEDULED',
        },
      });
      if (!medical_data) {
        throw new BadGatewayException('Medical request not found');
      }
      return medical_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async getDoctorMedicalRequest(id: number, type: string) {
    try {
      console.log('Doctor ID:', id, 'Type:', type);
      if (type == 'TODAY') {
        // show today's medical requests
        const medical_data = await this.prisma.medical_request.findMany({
          where: {
            doctorid: id,
            scheduled_date: {
              gte: new Date(new Date().setUTCHours(0, 0, 0, 0)),
              lt: new Date(new Date().setUTCHours(23, 59, 59, 999)),
            },
            medicalStatus: 'SCHEDULED',
            status: 'ACTIVE',
          },
          include: {
            cow: true,
            farmer: true,
          },
        });
        console.log('Medical Data:', medical_data);

        if (!medical_data) {
          throw new BadGatewayException('Medical request not found');
        }
        return medical_data;
      } else if (type == 'UPCOMING') {
        // show upcoming medical requests
        const medical_data = await this.prisma.medical_request.findMany({
          where: {
            doctorid: id,
            scheduled_date: {
              gt: new Date(new Date().setUTCHours(23, 59, 59, 999)),
            },
            medicalStatus: 'SCHEDULED',
            status: 'ACTIVE',
          },
          include: {
            cow: true,
            farmer: true,
          },
        });
        if (!medical_data) {
          throw new BadGatewayException('Medical request not found');
        }
        return medical_data;
      } else {
        const date30DaysAgo = new Date();
        date30DaysAgo.setUTCDate(date30DaysAgo.getUTCDate() - 30);
        const medical_data = await this.prisma.medical_request.findMany({
          where: {
            doctorid: id,
            scheduled_date: {
              gt: date30DaysAgo,
            },
            medicalStatus: 'RESOLVED',
            status: 'ACTIVE',
          },
          include: {
            cow: true,
            farmer: true,
          },
        });
        if (!medical_data) {
          throw new BadGatewayException('Medical request not found');
        }
        return medical_data;
      }
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async completeMedicalRequest(completeMedicalInput: CompleteMedicalInput) {
    try {
      const {
        id,
        follow_up_date,
        follow_up_treatment,
        treatment_provided,
        user_id,
      } = completeMedicalInput;

      const isexists = await this.prisma.medical_request.findUnique({
        where: { id },
      });
      if (!isexists) {
        throw new BadGatewayException('Medical request not found');
      }

      const medical_data = await this.prisma.medical_request.update({
        where: { id },
        data: {
          follow_up_date,
          follow_up_treatment,
          treatment_provided,
          medicalStatus: 'RESOLVED',
          updatedById: user_id,
        },
      });

      if (!medical_data) {
        throw new BadGatewayException('Medical request not found');
      }
      return medical_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
