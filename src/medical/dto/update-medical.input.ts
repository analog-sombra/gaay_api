import { CreateMedicalInput } from './create-medical.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicalInput extends PartialType(CreateMedicalInput) {
  @Field(() => Int)
  id: number;
}
