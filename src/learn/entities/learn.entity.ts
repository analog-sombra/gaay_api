import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Learn {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
