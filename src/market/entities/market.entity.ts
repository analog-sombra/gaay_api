import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Market {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  farmerid: number;

  @Field(() => User, { nullable: true })
  farmer: User;

  @Field(() => Int)
  cowid: number;

  @Field(() => Cow, { nullable: true })
  cow: Cow;

  @Field(() => Date)
  listingdate: Date;

  @Field(() => String)
  price: string;

  @Field(() => Boolean)
  verified: boolean;

  @Field(() => String)
  remarks: string;

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
