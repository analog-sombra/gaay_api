import { IsDate, IsNumber, isNumber, IsOptional } from 'class-validator';
import { CreateMedicalInput } from './create-medical.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicalInput extends PartialType(CreateMedicalInput) {
  @IsNumber()
  @Field(() => Int)
  id: number;
}
