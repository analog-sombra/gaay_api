import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserCows(id: number) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
        include: {
          cow: {
            include: {
              breed: true,
            },
          },
        },
      });

      if (!is_user) {
        throw new BadGatewayException('User not found');
      }

      return is_user.cow;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async getUserById(id: number) {
    try {
      const user_data = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!user_data) {
        throw new BadGatewayException('User not found');
      }
      return user_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
