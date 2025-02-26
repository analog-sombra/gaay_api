import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateHealthreportInput } from './dto/create-healthreport.input';
import { UpdateHealthreportInput } from './dto/update-healthreport.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class HealthreportService {
  constructor(private readonly prisma: PrismaService) {}

  async createHealthreport(createHealthreportInput: CreateHealthreportInput) {
    try {
      const cow_data = await this.prisma.cow_health_report.create({
        data: {
          cowid: createHealthreportInput.cowid,
          black_quarter_date: createHealthreportInput.black_quarter_date,
          brucellossis_date: createHealthreportInput.brucellossis_date,
          food_and_mouth_date: createHealthreportInput.food_and_mouth_date,
          hemorrhagic_septicemia_date: createHealthreportInput.hemorrhagic_septicemia_date,
          last_calf_birthdate: createHealthreportInput.last_calf_birthdate,
          last_deworming_date: createHealthreportInput.last_deworming_date,
          last_sickness_date: createHealthreportInput.last_sickness_date,
          last_treatment_date: createHealthreportInput.last_treatment_date,
          last_vaccine_date: createHealthreportInput.last_vaccine_date,
          heat_period: createHealthreportInput.heat_period,
          createdById: createHealthreportInput.createdById,
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Medical report not created');
      }
      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
