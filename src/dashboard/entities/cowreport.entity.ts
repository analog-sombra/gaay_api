import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CowStatus } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';

@ObjectType()
export class CowReportData {
  @Field(() => String)
  beneficiary_code: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  cowtagno: string;

  @Field(() => String)
  cowname: string;

  @Field(() => String)
  alias: string;

  @Field(() => String)
  sex: string;

  @Field(() => Date)
  birthdate: Date;

  @Field(() => String)
  weight: string;

  @Field(() => String)
  daily_milk_produce: string;

  @Field(() => CowStatus)
  cowstatus: CowStatus;

  @Field(() => Date, { nullable: true })
  death_date: Date;

  @Field(() => String, { nullable: true })
  death_reason: string;

  @Field(() => String)
  Beneficiary_Contact: string;

  @Field(() => String, { nullable: true })
  beneficiary_type: string;

  @Field(() => Int, { nullable: true })
  cow_count: number;

  @Field(() => Int)
  no_of_calves: number;

  @Field(() => Int)
  bull_calves: number;

  @Field(() => Int)
  heifer_calves: number;

  @Field(() => Int, { nullable: true })
  mother_id: number;

  @Field(() => String, { nullable: true })
  mother_cowtagno: string;
}
