import { Module } from '@nestjs/common';
import { LearnService } from './learn.service';
import { LearnResolver } from './learn.resolver';

@Module({
  providers: [LearnResolver, LearnService],
})
export class LearnModule {}
