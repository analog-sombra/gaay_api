import { CreateBreedInput } from './create-breed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBreedInput extends PartialType(CreateBreedInput) {
  @Field(() => Int)
  id: number;
}
