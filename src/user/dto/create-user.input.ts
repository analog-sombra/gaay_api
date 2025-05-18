import { InputType, Int, Field } from '@nestjs/graphql';
import { BeneficiaryType, Role } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
