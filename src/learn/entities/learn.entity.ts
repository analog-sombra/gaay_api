import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Learn } from '@prisma/client';

registerEnumType(Learn, {
  name: 'Learn',
});
@ObjectType()
export class LearnData {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  link: string;

  @Field(() => Learn)
  type: Learn;

  @Field(() => String)
  cover: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
