import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LearnService } from './learn.service';
import { LearnData } from './entities/learn.entity';
import { CreateLearnInput } from './dto/create-learn.input';
import { UpdateLearnInput } from './dto/update-learn.input';

@Resolver(() => LearnData)
export class LearnResolver {
  constructor(private readonly learnService: LearnService) {}

  @Query(() => [LearnData])
  getAllLearn() {
    return this.learnService.getAllLearn();
  }
}
