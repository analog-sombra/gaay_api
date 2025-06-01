import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalService } from './medical.service';
import { Medical } from './entities/medical.entity';
import { CreateMedicalInput } from './dto/create-medical.input';
import { UpdateMedicalInput } from './dto/update-medical.input';
import { MedicalPagination } from './entities/medical.pagination.entity';
import { SearchMedicalPaginationInput } from './dto/search-medical-pagination.input';
import { AddDoctorInput } from './dto/add-doctor.input';
import { CompleteMedicalInput } from './dto/complete-medical.input';

@Resolver(() => Medical)
export class MedicalResolver {
  constructor(private readonly medicalService: MedicalService) {}

  @Mutation(() => Medical)
  createMedical(
    @Args('createMedicalInput') createMedicalInput: CreateMedicalInput,
  ) {
    return this.medicalService.createMedical(createMedicalInput);
  }

  @Mutation(() => MedicalPagination)
  searchMedicalRequest(
    @Args('searchMedicalPaginationInput')
    searchMedicalPaginationInput: SearchMedicalPaginationInput,
  ) {
    return this.medicalService.searchMedicalRequest(
      searchMedicalPaginationInput,
    );
  }

  @Query(() => Medical)
  getMedicalRequestById(@Args('id', { type: () => Int }) id: number) {
    return this.medicalService.getMedicalRequestById(id);
  }

  @Mutation(() => Medical)
  addDoctor(@Args('addDoctorInput') addDoctorInput: AddDoctorInput) {
    return this.medicalService.addDoctor(addDoctorInput);
  }

  @Query(() => [Medical])
  getDoctorMedicalRequest(
    @Args('id', { type: () => Int }) id: number,
    @Args('type', { type: () => String }) type: string,
  ) {
    return this.medicalService.getDoctorMedicalRequest(id, type);
  }

  @Mutation(() => Medical)
  completeMedicalRequest(@Args('completeMedicalInput') completeMedicalInput: CompleteMedicalInput) {
    return this.medicalService.completeMedicalRequest(completeMedicalInput);
  }

}
