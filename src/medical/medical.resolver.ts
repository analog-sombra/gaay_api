import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalService } from './medical.service';
import { Medical } from './entities/medical.entity';
import { CreateMedicalInput } from './dto/create-medical.input';
import { UpdateMedicalInput } from './dto/update-medical.input';

@Resolver(() => Medical)
export class MedicalResolver {
  constructor(private readonly medicalService: MedicalService) {}

  @Mutation(() => Medical)
  createMedical(
    @Args('createMedicalInput') createMedicalInput: CreateMedicalInput,
  ) {
    return this.medicalService.createMedical(createMedicalInput);
  }
}
