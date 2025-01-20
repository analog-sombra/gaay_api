import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLearnInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
