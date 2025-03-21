import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { CowStatus, SEX, Status } from '@prisma/client';
import { Breed } from 'src/breed/entities/breed.entity';
import { Healthreport } from 'src/healthreport/entities/healthreport.entity';

registerEnumType(SEX, {
  name: 'SEX',
});
registerEnumType(CowStatus, {
  name: 'CowStatus',
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

  @Field(() => CowStatus)
  cowstatus: CowStatus;

  @Field(() => Date)
  birthdate: Date;

  @Field(() => Int, { nullable: true })
  noofcalves?: number;

  @Field(() => String)
  weight: string;

  @Field(() => String, { nullable: true })
  daily_milk_produce?: string;

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

  @Field(() => [Healthreport])
  cow_health_report: Healthreport[];
}
