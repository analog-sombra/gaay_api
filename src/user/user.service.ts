import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SearchUserPaginationInput } from './dto/search-user-pagination';
import { CreateUserInput, CreateUserLoanInput } from './dto/create-user.input';
import { CreateStaffInput } from './dto/create-staff.input';
import { Role } from '@prisma/client';

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

  async getLatestFarmer() {
    try {
      const user_data = await this.prisma.user.findFirst({
        where: {
          role: 'FARMER',
          status: 'ACTIVE',
          deletedAt: null,
        },
        orderBy: {
          createdAt: 'desc',
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

  async searchUsersByRole(roles: string[]) {
    try {
      const user_data = await this.prisma.user.findMany({
        where: {
          role: {
            in: roles as Role[],
          },
          status: 'ACTIVE',
          deletedAt: null,
        },
      });
      if (!user_data) {
        throw new BadGatewayException('Users not found');
      }
      return user_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async createUser(
    createUserInput: CreateUserInput,
    createUserLoanInput: CreateUserLoanInput,
  ) {
    try {
      // if beneficiary_code is not unique, throw error
      const is_user = await this.prisma.user.findUnique({
        where: {
          beneficiary_code: createUserInput.beneficiary_code,
        },
      });
      if (is_user) {
        throw new BadGatewayException('Beneficiary code already exists');
      }

      const user_data = await this.prisma.user.create({
        data: {
          ...createUserInput,
          status: 'ACTIVE',
          category: 'SCST',
        },
      });
      if (!user_data) {
        throw new BadGatewayException('User not found');
      }

      const loan = await this.prisma.loan.create({
        data: {
          ...createUserLoanInput,
          farmerid: user_data.id,
          status: 'ACTIVE',
          loan_id: user_data.beneficiary_code?.toString() || '',
          remarks: 'Loan created for new user',
          createdById: user_data.id,
          emi_date: new Date(
            new Date(createUserLoanInput.start_date).setDate(
              new Date(createUserLoanInput.start_date).getDate() + 30,
            ),
          ),
          end_date: new Date(
            new Date(createUserLoanInput.start_date).setMonth(
              new Date(createUserLoanInput.start_date).getMonth() + 60,
            ),
          ),
        },
      });
      if (!loan) {
        throw new BadGatewayException('Loan not created');
      }
      return user_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async createStaff(createStaffInput: CreateStaffInput) {
    try {
      const user_data = await this.prisma.user.create({
        data: {
          ...createStaffInput,
          status: 'ACTIVE',
          category: 'GENERAL',
          cow_count: 0,
          beneficiary_type: 'SSDU',
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
