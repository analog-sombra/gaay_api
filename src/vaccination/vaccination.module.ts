import { Module } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { VaccinationResolver } from './vaccination.resolver';

@Module({
  providers: [VaccinationResolver, VaccinationService],
})
export class VaccinationModule {}
