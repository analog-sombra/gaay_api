import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LearnService } from './learn.service';
import { Learn } from './entities/learn.entity';
import { CreateLearnInput } from './dto/create-learn.input';
import { UpdateLearnInput } from './dto/update-learn.input';

@Resolver(() => Learn)
export class LearnResolver {
  constructor(private readonly learnService: LearnService) {}

  @Mutation(() => Learn)
  createLearn(@Args('createLearnInput') createLearnInput: CreateLearnInput) {
    return this.learnService.create(createLearnInput);
  }

  @Query(() => [Learn], { name: 'learn' })
  findAll() {
    return this.learnService.findAll();
  }

  @Query(() => Learn, { name: 'learn' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.learnService.findOne(id);
  }

  @Mutation(() => Learn)
  updateLearn(@Args('updateLearnInput') updateLearnInput: UpdateLearnInput) {
    return this.learnService.update(updateLearnInput.id, updateLearnInput);
  }

  @Mutation(() => Learn)
  removeLearn(@Args('id', { type: () => Int }) id: number) {
    return this.learnService.remove(id);
  }
}
