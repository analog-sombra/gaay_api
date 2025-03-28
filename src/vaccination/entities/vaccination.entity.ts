import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SEX, Status } from '@prisma/client';
import { Breed } from 'src/breed/entities/breed.entity';

@ObjectType()
export class Vaccination {
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

  @Field(() => String, { nullable: true })
  photo1?: string;

  @Field(() => String, { nullable: true })
  photo2?: string;

  @Field(() => String, { nullable: true })
  photo3?: string;

  @Field(() => String, { nullable: true })
  photo4?: string;

  @Field(() => Int)
  breedid: number;

  @Field(() => SEX)
  sex: SEX;

  @Field(() => Date)
  birthdate: Date;

  @Field(() => Int, { nullable: true })
  noofcalves?: number;

  @Field(() => String)
  weight: string;

  @Field(() => Date, { nullable: true })
  last_vaccine_date?: Date;

  @Field(() => Date, { nullable: true })
  last_treatment_date?: Date;

  @Field(() => Date, { nullable: true })
  last_deworming_date?: Date;

  @Field(() => Date, { nullable: true })
  last_calf_birthdate?: Date;

  @Field(() => String, { nullable: true })
  daily_milk_produce?: string;

  @Field(() => String, { nullable: true })
  heat_period?: string;

  @Field(() => String, { nullable: true })
  remarks?: string;

  @Field(() => String, { nullable: true })
  purchased_from?: string;

  @Field(() => Date, { nullable: true })
  purchased_date?: Date;

  @Field(() => String, { nullable: true })
  purchased_contact?: string;

  @Field(() => String, { nullable: true })
  purchased_price?: string;

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
