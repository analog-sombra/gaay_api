import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cow } from 'src/cow/entities/cow.entity';

@ObjectType()
export class Healthreport {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cowid: number;

  @Field(() => Cow, { nullable: true })
  cow: Cow;

  @Field(() => Date, { nullable: true })
  last_vaccine_date?: Date;

  @Field(() => Date, { nullable: true })
  last_treatment_date?: Date;

  @Field(() => Date, { nullable: true })
  last_deworming_date?: Date;

  @Field(() => Date, { nullable: true })
  last_calf_birthdate?: Date;

  @Field(() => Date, { nullable: true })
  heat_period?: Date;

  @Field(() => Date, { nullable: true })
  last_sickness_date?: Date;

  @Field(() => Date, { nullable: true })
  food_and_mouth_date?: Date;

  @Field(() => Date, { nullable: true })
  hemorrhagic_septicemia_date?: Date;

  @Field(() => Date, { nullable: true })
  black_quarter_date?: Date;

  @Field(() => Date, { nullable: true })
  brucellossis_date?: Date;
}
