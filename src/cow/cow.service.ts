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
          last_vaccine_date: new Date(),
          last_deworming_date: new Date(),
          last_treatment_date: new Date(),
          last_calf_birthdate: new Date(),
          heat_period: new Date().toDateString(),
          createdById: createCowInput.farmerid,
        },
      });
      if (!cow_data) {
        throw new BadGatewayException('Cow not created');
      }
      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
