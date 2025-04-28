import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicalService } from './medical.service';
import { Medical } from './entities/medical.entity';
import { CreateMedicalInput } from './dto/create-medical.input';
import { UpdateMedicalInput } from './dto/update-medical.input';
import { MedicalPagination } from './entities/medical.pagination.entity';
import { SearchMedicalPaginationInput } from './dto/search-medical-pagination.input';

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
  
 



}
