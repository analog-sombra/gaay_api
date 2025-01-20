import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMarketInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
