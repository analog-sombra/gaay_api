import { Module } from '@nestjs/common';
import { MedicalService } from './medical.service';
import { MedicalResolver } from './medical.resolver';

@Module({
  providers: [MedicalResolver, MedicalService],
})
export class MedicalModule {}
