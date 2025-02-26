import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Medicine {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  cover: string;

  @Field(() => String)
  size: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  purpose: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  createdById: number;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  updatedById: number;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int)
  deletedById: number;
}
