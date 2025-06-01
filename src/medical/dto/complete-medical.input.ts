import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CompleteMedicalInput {
  @IsNumber()
  @Field(() => Int)
  id: number;

  @IsNumber()
  @Field(() => Int)
  user_id: number;

  @IsDate()
  @Field(() => Date)
  follow_up_date: Date;

  @IsString()
  @Field(() => String)
  follow_up_treatment: string;

  @IsString()
  @Field(() => String)
  treatment_provided: string;
}
