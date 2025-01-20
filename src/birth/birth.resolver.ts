import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BirthService } from './birth.service';
import { Birth } from './entities/birth.entity';
import { CreateBirthInput } from './dto/create-birth.input';
import { UpdateBirthInput } from './dto/update-birth.input';

@Resolver(() => Birth)
export class BirthResolver {
  constructor(private readonly birthService: BirthService) {}

  @Mutation(() => Birth)
  createBirth(@Args('createBirthInput') createBirthInput: CreateBirthInput) {
    return this.birthService.create(createBirthInput);
  }

  @Query(() => [Birth], { name: 'birth' })
  findAll() {
    return this.birthService.findAll();
  }

  @Query(() => Birth, { name: 'birth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.birthService.findOne(id);
  }

  @Mutation(() => Birth)
  updateBirth(@Args('updateBirthInput') updateBirthInput: UpdateBirthInput) {
    return this.birthService.update(updateBirthInput.id, updateBirthInput);
  }

  @Mutation(() => Birth)
  removeBirth(@Args('id', { type: () => Int }) id: number) {
    return this.birthService.remove(id);
  }
}
