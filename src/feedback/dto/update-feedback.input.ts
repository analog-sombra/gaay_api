import { CreateFeedbackInput } from './create-feedback.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) {
  @Field(() => Int)
  id: number;
}
