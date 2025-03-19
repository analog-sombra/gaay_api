import { InputType, Int, Field } from '@nestjs/graphql';
import { SizeUnit, Status } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateMedicineInput {
  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @Field(() => String)
  cover: string;

  @IsString()
  @Field(() => String)
  size: string;

  @IsEnum(SizeUnit)
  @Field(() => SizeUnit)
  size_unit: SizeUnit;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  pack_size: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  dosage: string;

  @IsString()
  @Field(() => String)
  mrp: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  sale_price: string;

  @IsString()
  @Field(() => String)
  description: string;

  @IsString()
  @Field(() => String)
  purpose: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  composition: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  manufacturer: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  large_description: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo1: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo2: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo3: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo4: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo5: string;

  @IsString()
  @Field(() => String)
  purchase_price: string;

  @IsEnum(Status)
  @Field(() => Status)
  status: Status;

  @IsNumber()
  @Field(() => Int)
  createdById: number;
}
