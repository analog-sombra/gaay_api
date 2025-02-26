import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMarketInput } from './dto/create-market.input';
import { UpdateMarketInput } from './dto/update-market.input';
import { CreateMedicalInput } from 'src/medical/dto/create-medical.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MarketService {
  constructor(private readonly prisma: PrismaService) {}

  async addMarketCow(createMarketInput: CreateMarketInput) {
    try {
      const isexist = await this.prisma.market.findFirst({
        where: {
          cowid: createMarketInput.cowid,
          status: 'ACTIVE',
          saleprice: null,
          deletedAt: null,
          deletedById: null,
        },
      });
      if (isexist) {
        throw new BadGatewayException('Cow already listed in market');
      }

      const medical_data = await this.prisma.market.create({
        data: {
          cowid: createMarketInput.cowid,
          farmerid: createMarketInput.farmerid,
          createdById: createMarketInput.farmerid,
          price: createMarketInput.price,
          remarks: createMarketInput.remarks,
          verified: createMarketInput.verified,
          listingdate: new Date(),
          status: createMarketInput.status,
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

  async getMarketCow() {
    try {
      const market_data = await this.prisma.market.findMany({
        where: {
          status: 'ACTIVE',
          deletedAt: null,
          deletedById: null,
          saleprice: null,
        },
        include: {
          cow: true,
          farmer: true,
        },
      });
      if (!market_data) {
        throw new BadGatewayException('Market data not found');
      }
      return market_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async getMarketFood() {
    try {
      const food_data = await this.prisma.food.findMany({
        where: {
          status: 'ACTIVE',
          deletedAt: null,
          deletedById: null,
        },
      });
      if (!food_data) {
        throw new BadGatewayException('Market food data not found');
      }
      return food_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async getMarketMedicine() {
    try {
      const food_data = await this.prisma.medicine.findMany({
        where: {
          status: 'ACTIVE',
          deletedAt: null,
          deletedById: null,
        },
      });
      if (!food_data) {
        throw new BadGatewayException('Market medicine data not found');
      }
      return food_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
