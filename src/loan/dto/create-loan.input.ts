import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
