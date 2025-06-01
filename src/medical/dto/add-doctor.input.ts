import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class AddDoctorInput {
  @IsNumber()
  @Field(() => Int)
  id: number;

  @IsNumber()
  @Field(() => Int)
  doctorid: number;

  @IsDate()
  @Field(() => Date)
  scheduled_date: Date;
}
