import { CreateVaccinationInput } from './create-vaccination.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVaccinationInput extends PartialType(CreateVaccinationInput) {
  @Field(() => Int)
  id: number;
}
