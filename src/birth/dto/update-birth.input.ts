import { CreateBirthInput } from './create-birth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBirthInput extends PartialType(CreateBirthInput) {
  @Field(() => Int)
  id: number;
}
