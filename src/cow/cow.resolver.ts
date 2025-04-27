import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CowService } from './cow.service';
import { Cow } from './entities/cow.entity';
import { CreateCowInput } from './dto/create-cow.input';
import { UpdateCowInput } from './dto/update-cow.input';
import { CreateCowCalfInput } from './dto/create-cow-calf.input';
import { CowPagination } from './entities/cow.pagination.entity';
import { SearchCowPaginationInput } from './dto/search-cow-pagination.input';

@Resolver(() => Cow)
export class CowResolver {
  constructor(private readonly cowService: CowService) {}

  @Query(() => Cow)
  getCowById(@Args('id', { type: () => Int }) id: number) {
    return this.cowService.getCowById(id);
  }

  @Mutation(() => Cow)
  createCow(@Args('createCowInput') createCowInput: CreateCowInput) {
    return this.cowService.createCow(createCowInput);
  }

  @Mutation(() => Cow)
  createCowCalf(@Args('createCowCalfInput') createCowCalfInput: CreateCowCalfInput) {
    return this.cowService.createCowCalf(createCowCalfInput);
  }

  @Mutation(() => Cow)
  updateCow(@Args('updateCowInput') updateCowInput: UpdateCowInput) {
    return this.cowService.updateCow(updateCowInput);
  }

  @Mutation(() => CowPagination)
  searchCows(@Args('searchCowPaginationInput') searchCowPaginationInput:  SearchCowPaginationInput) {
    return this.cowService.searchCows(searchCowPaginationInput);
  }
}
