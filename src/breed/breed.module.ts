import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedResolver } from './breed.resolver';

@Module({
  providers: [BreedResolver, BreedService],
})
export class BreedModule {}
