import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMedicalInput } from './dto/create-medical.input';
import { UpdateMedicalInput } from './dto/update-medical.input';
import { PrismaService } from 'prisma/prisma.service';

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
}
