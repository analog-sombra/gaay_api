import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CowStatus } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';

@ObjectType()
export class UserReportData {
  @Field(() => String)
  beneficiary_code: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  alias: string;

  @Field(() => String)
  contact: string;

  @Field(() => String, { nullable: true })
  contact_two: string;

  @Field(() => String)
  beneficiary_type: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  village: string;

  @Field(() => String)
  district: string;

  @Field(() => String)
  status: string;

  @Field(() => String, { nullable: true })
  loan_id: string;

  @Field(() => String, { nullable: true })
  amount: string;

  @Field(() => Date, { nullable: true })
  start_date: Date;

  @Field(() => Date, { nullable: true })
  end_date: Date;

  @Field(() => String, { nullable: true })
  emi_amount: string;

  @Field(() => Date, { nullable: true })
  emi_date: Date;

  @Field(() => Int)
  number_of_cows: number;

  @Field(() => Int)
  alive_cows: number;

  @Field(() => Int)
  sold_cows: number;

  @Field(() => Int)
  dead_cows: number;

  @Field(() => Int)
  no_of_calves: number;

  @Field(() => Int)
  number_of_male_calves: number;

  @Field(() => Int)
  number_of_female_calves: number;
}
