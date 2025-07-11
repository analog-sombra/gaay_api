import { InputType, Int, Field } from '@nestjs/graphql';
import { BeneficiaryType, Role } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateStaffInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  alias: string;

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

  @IsEnum(Role)
  @IsNotEmpty()
  @Field(() => Role)
  role: Role;
}
