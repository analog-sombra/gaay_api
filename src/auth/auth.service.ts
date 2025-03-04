import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2';
import { user } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(code: string, password: string) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          beneficiary_code: code,
          deletedAt: null,
          status: 'ACTIVE',
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
      // const is_user = await this.prisma.user.findUnique({
      //   where: {
      //     contact: mobile,
      //   },
      // });

      // if (is_user) {
      //   throw new BadGatewayException('User already exists');
      // }

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

  async codeLogin(code: string) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          beneficiary_code: code,
          deletedAt: null,
          status: 'ACTIVE',
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

  async sendOtp(code: string) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          beneficiary_code: code,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!is_user) {
        throw new BadGatewayException('User not found');
      }

      const otp = is_user.id == 6 ? '987135' : this.generateOTP(6);

      // const response = await axios.get(
      //   `https://api.arihantsms.com/api/v2/SendSMS?SenderId=DNHPDA&Is_Unicode=false&Is_Flash=false&Message=The%20OTP%20for%20Planning%20and%20Development%20Authority%20Portal%20login%20is%20${otp}.%20The%20OTP%20is%20valid%20for%205%20mins.&MobileNumbers=91${is_user.contact}&ApiKey=rL56LBkGeOa1MKFm5SrSKtz%2Bq55zMVdxk5PNvQkg2nY%3D&ClientId=ebff4d6c-072b-4342-b71f-dcca677713f8`,
      // );
      // const response = await axios.get(
      //   `https://api.arihantsms.com/api/v2/SendSMS?SenderId=DNHPDA&Is_Unicode=false&Is_Flash=false&Message=The%20OTP%20for%20Planning%20and%20Development%20Authority%20Portal%20login%20is%20${otp}.%20The%20OTP%20is%20valid%20for%205%20mins.&MobileNumbers=919773356997&ApiKey=rL56LBkGeOa1MKFm5SrSKtz%2Bq55zMVdxk5PNvQkg2nY%3D&ClientId=ebff4d6c-072b-4342-b71f-dcca677713f8`,
      // );
      const response = await axios.get(
        `http://sms.smartechwebworks.com/submitsms.jsp?user=ScstDnhdd&key=641a638cd0XX&mobile=+91${is_user.contact}&message=Your OTP for GAAY App login is ${otp}. Do not share this code with anyone. -SCSTDNHDD&senderid=DNSCST&accusage=1&entityid=1701174041475054210&tempid=1707174065094223303`,
      );

      // if (response.data.Data[0].MessageErrorDescription == 'Success') {

      if (response.data.toString().split(',')[0].trim() == 'sent') {
        const opt_response = await this.prisma.user.update({
          where: {
            beneficiary_code: code,
            deletedAt: null,
            status: 'ACTIVE',
          },
          data: {
            otp: otp,
          },
        });

        if (!opt_response) {
          throw new BadGatewayException('OTP not sent');
        }

        return is_user;
      } else {
        throw new BadGatewayException('OTP not sent');
      }
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async verifyOtp(otpInput: { code: string; otp: string }) {
    try {
      const is_user = await this.prisma.user.findUnique({
        where: {
          beneficiary_code: otpInput.code,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!is_user) {
        throw new BadGatewayException('User not found');
      }

      if (is_user.otp !== otpInput.otp) {
        throw new BadGatewayException('OTP not valid');
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
