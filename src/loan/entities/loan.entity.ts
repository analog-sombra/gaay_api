import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Loan {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
