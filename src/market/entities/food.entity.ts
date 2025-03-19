import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { SizeUnit, Status } from '@prisma/client';
import { Cow } from 'src/cow/entities/cow.entity';
import { User } from 'src/user/entities/user.entity';

registerEnumType(SizeUnit, {
  name: 'SizeUnit',
});

@ObjectType()
export class Food {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  cover: string;

  @Field(() => String)
  size: string;

  @Field(() => SizeUnit)
  size_unit: SizeUnit;

  @Field(() => String, { nullable: true })
  pack_size: string;

  @Field(() => String)
  mrp: string;

  @Field(() => String, { nullable: true })
  sale_price: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  purpose: string;

  @Field(() => String, { nullable: true })
  composition: string;

  @Field(() => String, { nullable: true })
  manufacturer: string;

  @Field(() => String, { nullable: true })
  large_description: string;

  @Field(() => String, { nullable: true })
  photo1: string;

  @Field(() => String, { nullable: true })
  photo2: string;

  @Field(() => String, { nullable: true })
  photo3: string;

  @Field(() => String, { nullable: true })
  photo4: string;

  @Field(() => String, { nullable: true })
  photo5: string;

  @Field(() => String)
  purchase_price: string;

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
