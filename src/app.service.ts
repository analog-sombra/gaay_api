import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { console } from 'inspector';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async onModuleInit() {
    this.logger.log('Server is starting... Running database script.');
    // Execute your DB queries here
  }

  async info(): Promise<string> {
    const isExist = await this.cacheManager.get('info');
    if (isExist) {
      this.logger.log('From cache');
      this.logger.log(isExist);
    } else {
      this.logger.log('From db');
      await this.cacheManager.set('info', 'test');
      const data = await this.cacheManager.get('info');
      this.logger.log(data);
    }

    return JSON.stringify({
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
      author: 'unknown',
      website: 'http://www.test.com',
    });
  }
}
