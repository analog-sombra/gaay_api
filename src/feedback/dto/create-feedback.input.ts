import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateFeedbackInput {
  @IsString()
  @Field(() => String)
  description: string;

  @IsString()
  @Field(() => String)
  suggestion: string;

  @IsBoolean()
  @Field(() => Boolean)
  happy: boolean;

  @IsEnum(Status)
  @Field(() => Status)
  status: Status;

  @IsNumber()
  @Field(() => Int)
  createdById: number;
}
