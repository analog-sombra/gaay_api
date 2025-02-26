import { CreateHealthreportInput } from './create-healthreport.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHealthreportInput extends PartialType(CreateHealthreportInput) {
  @Field(() => Int)
  id: number;
}
