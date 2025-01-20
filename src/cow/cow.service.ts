import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

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
      console.log(cow_data);
      return cow_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
