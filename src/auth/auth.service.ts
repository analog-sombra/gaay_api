import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2';
import { user } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(mobile: string, password: string) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          contact: mobile,
        },
      });

      if (!is_user) {
        throw new BadGatewayException('User not found');
      }

      if (!is_user.password) {
        throw new BadGatewayException('Password not found');
      }

      const isvalid: boolean = await argon2.verify(is_user.password, password);

      if (!isvalid) {
        throw new BadGatewayException('Password not valid');
      }

      return is_user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async signup(mobile: string, name: string, password: string) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          contact: mobile,
        },
      });

      if (is_user) {
        throw new BadGatewayException('User already exists');
      }

      const hashedPassword = await argon2.hash(password);

      const user = await this.prisma.user.create({
        data: {
          contact: mobile,
          name: name,
          password: hashedPassword,
        },
      });

      return user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async mobileLogin(mobile: string) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          contact: mobile,
        },
      });

      if (!is_user) {
        throw new BadGatewayException('User not found');
      }

      return is_user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  generateOTP(len: number): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < len; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
}
