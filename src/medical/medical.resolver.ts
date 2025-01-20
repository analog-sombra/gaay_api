import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalService } from './medical.service';
import { Medical } from './entities/medical.entity';
import { CreateMedicalInput } from './dto/create-medical.input';
import { UpdateMedicalInput } from './dto/update-medical.input';

@Resolver(() => Medical)
export class MedicalResolver {
  constructor(private readonly medicalService: MedicalService) {}

  @Mutation(() => Medical)
  createMedical(@Args('createMedicalInput') createMedicalInput: CreateMedicalInput) {
    return this.medicalService.create(createMedicalInput);
  }

  @Query(() => [Medical], { name: 'medical' })
  findAll() {
    return this.medicalService.findAll();
  }

  @Query(() => Medical, { name: 'medical' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicalService.findOne(id);
  }

  @Mutation(() => Medical)
  updateMedical(@Args('updateMedicalInput') updateMedicalInput: UpdateMedicalInput) {
    return this.medicalService.update(updateMedicalInput.id, updateMedicalInput);
  }

  @Mutation(() => Medical)
  removeMedical(@Args('id', { type: () => Int }) id: number) {
    return this.medicalService.remove(id);
  }
}
