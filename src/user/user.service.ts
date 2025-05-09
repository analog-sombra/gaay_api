import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SearchUserPaginationInput } from './dto/search-user-pagination';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserCows(id: number) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          id: id,
          deletedAt: null,
        },
        include: {
          cow: {
            include: {
              breed: true,
              cow_health_report: {
                orderBy: {
                  createdAt: 'desc',
                },
              },
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
  async getFarmerByCode(code: string) {
    try {
      const user_data = await this.prisma.user.findFirst({
        where: {
          beneficiary_code: code,
          status: 'ACTIVE',
          deletedAt: null,
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

  async editUserPhoto(id: number, photo: string) {
    try {
      const user_data = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          photo: photo,
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

  async searchUsers(searchUserPaginationInput: SearchUserPaginationInput) {
    try {
      const { skip, take, search, roles } = searchUserPaginationInput;

      const [data, total] = await this.prisma.$transaction([
        this.prisma.user.findMany({
          where: {
            ...(search && {
              OR: [
                { name: { contains: search || undefined } },
                { contact: { contains: search || undefined } },
                { beneficiary_code: { contains: search || undefined } },
              ],
            }),
            ...(roles?.length && {
              role: {
                in: roles,
              },
            }),
            status: 'ACTIVE',
            deletedAt: null,
          },
          skip,
          take,
        }),
        this.prisma.user.count({
          where: {
            ...(search && {
              OR: [
                { name: { contains: search || undefined } },
                { contact: { contains: search || undefined } },
                { beneficiary_code: { contains: search || undefined } },
              ],
            }),
            ...(roles?.length && {
              role: {
                in: roles,
              },
            }),
            status: 'ACTIVE',
            deletedAt: null,
          },
        }),
      ]);

      return {
        data,
        total,
        skip,
        take,
      };
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
