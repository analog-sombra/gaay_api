import { CreateLearnInput } from './create-learn.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLearnInput extends PartialType(CreateLearnInput) {
  @Field(() => Int)
  id: number;
}
