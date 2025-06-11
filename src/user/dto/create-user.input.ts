import { InputType, Int, Field } from '@nestjs/graphql';
import { BeneficiaryType, Role } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  contact: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact_two?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  village: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  district: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  occupation?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  beneficiary_code: string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Int)
  cow_count: number;

  @IsEnum(Role)
  @IsNotEmpty()
  @Field(() => Role)
  role: Role;

  @IsEnum(BeneficiaryType)
  @IsNotEmpty()
  @Field(() => BeneficiaryType)
  beneficiary_type: BeneficiaryType;
}

@InputType()
export class CreateUserLoanInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  amount: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  emi_amount: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  start_date: string;
}
