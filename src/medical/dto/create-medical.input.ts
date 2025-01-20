import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
