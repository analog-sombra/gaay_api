import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMarketInput } from './dto/create-market.input';
import { UpdateMarketInput } from './dto/update-market.input';
import { CreateMedicalInput } from 'src/medical/dto/create-medical.input';
import { PrismaService } from 'prisma/prisma.service';
import { CreateFoodInput } from './dto/create-food.input';
import { CreateMedicineInput } from './dto/create-medicine.input';

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

  async createMarketFood(createFoodInput: CreateFoodInput) {
    try {
      const market_data = await this.prisma.food.create({
        data: createFoodInput,
      });
      if (!market_data) {
        throw new BadGatewayException('Market food data not created');
      }
      return market_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async createMarketMedicine(createMedicineInput: CreateMedicineInput) {
    try {
      const medicine_data = await this.prisma.medicine.create({
        data: createMedicineInput,
      });
      if (!medicine_data) {
        throw new BadGatewayException('Market medicine data not created');
      }
      return medicine_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async getMarketFoodByUser(id: number, skip: number, take: number) {
    try {
      const [food_data, total] = await this.prisma.$transaction([
        this.prisma.food.findMany({
          where: {
            status: 'ACTIVE',
            deletedAt: null,
            deletedById: null,
            createdById: id,
          },
          skip: skip,
          take: take,
        }),
        this.prisma.food.count({
          where: {
            status: 'ACTIVE',
            deletedAt: null,
            deletedById: null,
            createdById: id,
          },
        }),
      ]);
      if (!food_data) {
        throw new BadGatewayException('Market food data not found');
      }
      return {
        skip: skip,
        take: take,
        data: food_data,
        total: total,
      };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async getMarketMedicineByUser(id: number, skip: number, take: number) {
    try {
      // const food_data = await this.prisma.medicine.findMany({
      //   where: {
      //     status: 'ACTIVE',
      //     deletedAt: null,
      //     deletedById: null,
      //     createdById: id,
      //   },
      // });
      // if (!food_data) {
      //   throw new BadGatewayException('Market food data not found');
      // }
      // return food_data;
      const [medicine_data, total] = await this.prisma.$transaction([
        this.prisma.medicine.findMany({
          where: {
            status: 'ACTIVE',
            deletedAt: null,
            deletedById: null,
            createdById: id,
          },
          skip: skip,
          take: take,
        }),
        this.prisma.medicine.count({
          where: {
            status: 'ACTIVE',
            deletedAt: null,
            deletedById: null,
            createdById: id,
          },
        }),
      ]);
      if (!medicine_data) {
        throw new BadGatewayException('Market medicine data not found');
      }
      return {
        skip: skip,
        take: take,
        data: medicine_data,
        total: total,
      };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async getMarketCowByUser(id: number, skip: number, take: number) {
    try {
      const [market_data, total] = await this.prisma.$transaction([
        this.prisma.market.findMany({
          where: {
            status: 'ACTIVE',
            deletedAt: null,
            deletedById: null,
            createdById: id,
          },
          include: {
            cow: {
              include: {
                breed: true,
              },
            },
            farmer: true,
          },
          skip: skip,
          take: take,
        }),
        this.prisma.market.count({
          where: {
            status: 'ACTIVE',
            deletedAt: null,
            deletedById: null,
            createdById: id,
          },
        }),
      ]);

      if (!market_data) {
        throw new BadGatewayException('Market cow data not found');
      }

      return {
        skip: skip,
        take: take,
        data: market_data,
        total: total,
      };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async getAllMarketCowByUser(id: number) {
    try {
      const market_data = await this.prisma.market.findMany({
        where: {
          status: 'ACTIVE',
          deletedAt: null,
          deletedById: null,
          farmerid: id,
        },
        include: {
          cow: {
            include: {
              breed: true,
            },
          },
          farmer: true,
        },
      });

      if (!market_data) {
        throw new BadGatewayException('Market cow data not found');
      }

      return market_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
