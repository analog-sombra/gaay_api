import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCowInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
