import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@ObjectType()
export class Birth {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  remarks: string;

  @Field(() => String, { nullable: true })
  fathercowid: string;

  @Field(() => Int)
  mothercowid: number;

  @Field(() => Int)
  calfid: number;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  createdById: number;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int)
  updatedById: number;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int, { nullable: true })
  deletedById?: number;
}
