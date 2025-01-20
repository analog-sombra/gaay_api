import { Module } from '@nestjs/common';
import { BirthService } from './birth.service';
import { BirthResolver } from './birth.resolver';

@Module({
  providers: [BirthResolver, BirthService],
})
export class BirthModule {}
