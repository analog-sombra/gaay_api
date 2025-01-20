import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Birth {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
