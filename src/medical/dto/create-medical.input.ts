import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateMedicalInput {
  @IsNumber()
  @Field(() => Int)
  cowid: number;

  @IsNumber()
  @Field(() => Int)
  farmerid: number;

  @IsString()
  @Field(() => String)
  reason: string;
}
