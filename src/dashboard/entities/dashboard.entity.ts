import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DashboardData {
  @Field(() => Int)
  cows: number;

  @Field(() => Int)
  venders: number;

  @Field(() => Int)
  user: number;

  @Field(() => Int)
  medical: number;
}
