import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBreedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
