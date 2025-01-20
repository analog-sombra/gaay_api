import { Module } from '@nestjs/common';
import { CowService } from './cow.service';
import { CowResolver } from './cow.resolver';

@Module({
  providers: [CowResolver, CowService],
})
export class CowModule {}
