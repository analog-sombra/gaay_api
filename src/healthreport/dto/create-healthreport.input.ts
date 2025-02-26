import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateHealthreportInput {
  @IsNumber()
  @Field(() => Int)
  createdById: number;

  @IsNumber()
  @Field(() => Int)
  cowid: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  last_vaccine_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  last_treatment_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  last_deworming_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  last_sickness_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  food_and_mouth_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  hemorrhagic_septicemia_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  black_quarter_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  brucellossis_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  last_calf_birthdate?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  heat_period?: Date;
}
