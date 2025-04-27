import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LearnService } from './learn.service';
import { LearnData } from './entities/learn.entity';
import { LearnPagination } from './entities/learn.pagination.entity';
import { SearchLearnPaginationInput } from './dto/search-learn-pagination';

@Resolver(() => LearnData)
export class LearnResolver {
  constructor(private readonly learnService: LearnService) {}

  @Query(() => [LearnData])
  getAllLearn() {
    return this.learnService.getAllLearn();
  }

  @Mutation(() => LearnPagination)
  searchLearn(
    @Args('searchLearnPaginationInput')
    searchLearnPaginationInput: SearchLearnPaginationInput,
  ) {
    return this.learnService.searchLearn(searchLearnPaginationInput);
  }
}
