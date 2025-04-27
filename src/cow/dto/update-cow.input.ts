import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateCowInput } from './create-cow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CowStatus, SEX, Status } from '@prisma/client';

@InputType()
export class UpdateCowInput extends PartialType(CreateCowInput) {
  @IsNumber()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  farmerid: number;

  @IsOptional()
  @IsString()
  @Field(() => String)
  cowtagno: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  cowname: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  alias: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  photocover: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo1?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo2?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo3?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo4?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  breedid: number;

  @IsOptional()
  @IsEnum(SEX)
  @Field(() => SEX)
  sex: SEX;

  @IsOptional()
  @IsEnum(CowStatus)
  @Field(() => CowStatus)
  cowstatus: CowStatus;

  @IsDate()
  @Field(() => Date)
  birthdate: Date;

  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  noofcalves?: number;

  @IsOptional()
  @IsString()
  @Field(() => String)
  weight: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  daily_milk_produce?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  remarks?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  purchased_from?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  purchased_date?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  purchased_contact?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  purchased_price?: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status)
  status: Status;

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

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insurance_id?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insurance_name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insurance_type?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insurance_amount?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  insurance_date?: Date;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  insurance_renewal_date?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  insurance_renewal_amount?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  premium_amount?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  death_date?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  sold_to?: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  sold_date?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  sold_contact?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  sold_price?: string;
}
