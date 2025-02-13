import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async info(): Promise<string> {
    return await this.appService.info();
  }
}
