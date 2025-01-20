import { CreateMarketInput } from './create-market.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMarketInput extends PartialType(CreateMarketInput) {
  @Field(() => Int)
  id: number;
}
