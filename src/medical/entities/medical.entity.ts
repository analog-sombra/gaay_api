import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { RequestType, Status } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';
import { User } from 'src/user/entities/user.entity';

registerEnumType(RequestType, {
  name: 'RequestType',
});

@ObjectType()
export class Medical {
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

  @Field(() => Int, { nullable: true })
  doctorid: number;

  @Field(() => User, { nullable: true })
  doctor: User;

  @Field(() => Date)
  date: Date;

  @Field(() => String)
  reason: string;

  @Field(() => String)
  treatment_provided: string;

  @Field(() => Date)
  follow_up_date: Date;

  @Field(() => String)
  follow_up_treatment: string;

  @Field(() => RequestType)
  type: RequestType;

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
  updatedById?: number;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int)
  deletedById: number;
}
