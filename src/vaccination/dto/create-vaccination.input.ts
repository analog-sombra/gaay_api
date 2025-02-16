import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVaccinationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
