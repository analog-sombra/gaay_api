import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBirthInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
