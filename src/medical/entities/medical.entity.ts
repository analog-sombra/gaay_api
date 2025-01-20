import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Medical {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
