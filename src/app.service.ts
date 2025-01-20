import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  info(): string {
    return JSON.stringify({
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
      author: 'unknown',
      website: 'http://www.test.com',
    });
  }
}
