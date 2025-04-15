import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MonthData {
  @Field()
  month: string;

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class TreatmentData {
  @Field(() => [MonthData])
  monthlyData: MonthData[];
}
