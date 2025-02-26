import { InputType, Int, Field } from '@nestjs/graphql';
import { SEX, Status } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateCowInput {
  @IsNumber()
  @Field(() => Int)
  farmerid: number;

  @IsString()
  @Field(() => String)
  cowtagno: string;

  @IsString()
  @Field(() => String)
  cowname: string;

  @IsString()
  @Field(() => String)
  alias: string;

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

  @IsNumber()
  @Field(() => Int)
  breedid: number;

  @IsEnum(SEX)
  @Field(() => SEX)
  sex: SEX;

  @IsDate()
  @Field(() => Date)
  birthdate: Date;

  @IsNumber()
  @Field(() => Int)
  noofcalves?: number;

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

  @IsEnum(Status)
  @Field(() => Status)
  status: Status;
}
