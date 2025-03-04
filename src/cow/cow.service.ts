import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCowInput } from './dto/create-cow.input';

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
          birthdate: createCowInput.birthdate,
          noofcalves: createCowInput.noofcalves,
          weight: createCowInput.weight,
          createdById: createCowInput.farmerid,
          daily_milk_produce: createCowInput.daily_milk_produce,
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Cow not created');
      }

      const cow_health_report = await this.prisma.cow_health_report.create({
        data: {
          cowid: cow_data.id,
          createdById: createCowInput.farmerid,
          black_quarter_date: createCowInput.black_quarter_date,
          brucellossis_date: createCowInput.brucellossis_date,
          food_and_mouth_date: createCowInput.food_and_mouth_date,
          hemorrhagic_septicemia_date:
            createCowInput.hemorrhagic_septicemia_date,
          last_calf_birthdate: createCowInput.last_calf_birthdate,
          last_deworming_date: createCowInput.last_deworming_date,
          last_sickness_date: createCowInput.last_sickness_date,
          last_treatment_date: createCowInput.last_treatment_date,
          last_vaccine_date: createCowInput.last_vaccine_date,
          heat_period: createCowInput.heat_period,
        },
      });

      if (!cow_health_report) {
        throw new BadGatewayException('Cow health report not created');
      }
      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
