import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { SEX, Status } from '@prisma/client';
import { Breed } from 'src/breed/entities/breed.entity';

registerEnumType(SEX, {
  name: 'SEX',
});

@ObjectType()
export class Cow {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  farmerid: number;

  @Field(() => String)
  cowtagno: string;

  @Field(() => String)
  cowname: string;

  @Field(() => String)
  alias: string;

  @Field(() => String)
  photocover: string;

  @Field(() => String)
  photo1: string;

  @Field(() => String)
  photo2: string;

  @Field(() => String)
  photo3: string;

  @Field(() => String)
  photo4: string;

  @Field(() => Int)
  breedid: number;

  @Field(() => SEX)
  sex: SEX;

  @Field(() => Date)
  birthdate: Date;

  @Field(() => Int)
  noofcalves: number;

  @Field(() => String)
  weight: string;

  @Field(() => Date)
  last_vaccine_date: Date;

  @Field(() => Date)
  last_treatment_date: Date;

  @Field(() => Date)
  last_deworming_date: Date;

  @Field(() => Date)
  last_calf_birthdate: Date;

  @Field(() => String)
  daily_milk_produce: string;

  @Field(() => String)
  heat_period: string;

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

  @Field(() => Int)
  updatedById: number;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int, { nullable: true })
  deletedById?: number;

  @Field(() => Breed)
  breed: Breed;
}
