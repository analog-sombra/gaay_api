import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Loan {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  farmerid: number;

  @Field(() => User, { nullable: true })
  farmer?: User;

  @Field(() => Cow, { nullable: true })
  cow?: Cow;

  @Field(() => Int)
  cowid: number;

  @Field(() => String)
  amount: string;

  @Field(() => Date)
  start_date: Date;

  @Field(() => Date)
  end_date: Date;

  @Field(() => String)
  emi_amount: string;

  @Field(() => Date)
  emi_date: Date;

  @Field(() => String)
  loan_id: string;

  @Field(() => String)
  remark: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
