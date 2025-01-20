import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CowService } from './cow.service';
import { Cow } from './entities/cow.entity';

@Resolver(() => Cow)
export class CowResolver {
  constructor(private readonly cowService: CowService) {}

  @Query(() => Cow)
  getCowById(@Args('id', { type: () => Int }) id: number) {
    return this.cowService.getCowById(id);
  }
}
