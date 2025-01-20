import { CreateCowInput } from './create-cow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCowInput extends PartialType(CreateCowInput) {
  @Field(() => Int)
  id: number;
}
