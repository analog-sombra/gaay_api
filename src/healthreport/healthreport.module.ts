import { Module } from '@nestjs/common';
import { HealthreportService } from './healthreport.service';
import { HealthreportResolver } from './healthreport.resolver';

@Module({
  providers: [HealthreportResolver, HealthreportService],
})
export class HealthreportModule {}
