import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCowInput } from './dto/create-cow.input';
import { UpdateCowInput } from './dto/update-cow.input';

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
    console.log(createCowInput);
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
          birthdate: createCowInput.birthdate.toISOString(),
          noofcalves: createCowInput.noofcalves,
          weight: createCowInput.weight,
          createdById: createCowInput.farmerid,
          daily_milk_produce: createCowInput.daily_milk_produce,
          cowstatus: createCowInput.cowstatus,
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Cow not created');
      }

      const cow_health_report = await this.prisma.cow_health_report.create({
        data: {
          cowid: cow_data.id,
          createdById: createCowInput.farmerid,
          black_quarter_date: createCowInput.black_quarter_date!.toISOString(),
          brucellossis_date: createCowInput.brucellossis_date!.toISOString(),
          food_and_mouth_date:
            createCowInput.food_and_mouth_date!.toISOString(),
          hemorrhagic_septicemia_date:
            createCowInput.hemorrhagic_septicemia_date!.toISOString(),
          last_calf_birthdate:
            createCowInput.last_calf_birthdate!.toISOString(),
          last_deworming_date:
            createCowInput.last_deworming_date!.toISOString(),
          last_sickness_date: createCowInput.last_sickness_date!.toISOString(),
          last_treatment_date:
            createCowInput.last_treatment_date!.toISOString(),
          last_vaccine_date: createCowInput.last_vaccine_date!.toISOString(),
          heat_period: createCowInput.heat_period!.toISOString(),
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
        },
      });

      if (!updated_cow) {
        throw new BadGatewayException('Cow not updated');
      }
      const cow_health_report = await this.prisma.cow_health_report.create({
        data: {
          cowid: cow_data.id,
          createdById: updateCowInput.farmerid,
          black_quarter_date: updateCowInput.black_quarter_date!.toISOString(),
          brucellossis_date: updateCowInput.brucellossis_date!.toISOString(),
          food_and_mouth_date:
            updateCowInput.food_and_mouth_date!.toISOString(),
          hemorrhagic_septicemia_date:
            updateCowInput.hemorrhagic_septicemia_date!.toISOString(),
          last_calf_birthdate:
            updateCowInput.last_calf_birthdate!.toISOString(),
          last_deworming_date:
            updateCowInput.last_deworming_date!.toISOString(),
          last_sickness_date: updateCowInput.last_sickness_date!.toISOString(),
          last_treatment_date:
            updateCowInput.last_treatment_date!.toISOString(),
          last_vaccine_date: updateCowInput.last_vaccine_date!.toISOString(),
          heat_period: updateCowInput.heat_period!.toISOString(),
        },
      });

      if (!cow_health_report) {
        throw new BadGatewayException('Cow health report not created');
      }

      return updated_cow;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
