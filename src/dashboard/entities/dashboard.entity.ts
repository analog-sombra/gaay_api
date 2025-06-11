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

@ObjectType()
export class DashboardCowReportData {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  alive: number;

  @Field(() => Int)
  dead: number;

  @Field(() => Int)
  sold: number;

  @Field(() => Int)
  heifer: number;

  @Field(() => Int)
  calf: number;

  @Field(() => Int)
  cow_alive: number;

  @Field(() => Int)
  cow_dead: number;
}

@ObjectType()
export class DashboardMedicalReportData {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  create: number;

  @Field(() => Int)
  schedule: number;

  @Field(() => Int)
  completed: number;

  @Field(() => Int)
  late: number;
}

@ObjectType()
export class DashboardUserReportData {
  @Field(() => Int)
  iddp: number;

  @Field(() => Int)
  iddp_cow_count: number;

  @Field(() => Int)
  ssdu: number;

  @Field(() => Int)
  ssdu_cow_count: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  withcows: number;
}
