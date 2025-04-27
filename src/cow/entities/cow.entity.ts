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
import { User } from 'src/user/entities/user.entity';

registerEnumType(SEX, {
  name: 'SEX',
});
registerEnumType(CowStatus, {
  name: 'CowStatus',
});

@ObjectType()
export class Insurance {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cowid: number;

  @Field(() => String, { nullable: true })
  insurance_id: string;

  @Field(() => String, { nullable: true })
  insurance_name: string;

  @Field(() => String, { nullable: true })
  insurance_type: string;

  @Field(() => String, { nullable: true })
  insurance_amount: string;

  @Field(() => Date, { nullable: true })
  insurance_date: Date;

  @Field(() => Date, { nullable: true })
  insurance_renewal_date: Date;

  @Field(() => String, { nullable: true })
  insurance_renewal_amount: string;

  @Field(() => String, { nullable: true })
  premium_amount: string;

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

  @Field(() => String, { nullable: true })
  sold_to?: string;

  @Field(() => Date, { nullable: true })
  sold_date?: Date;

  @Field(() => String, { nullable: true })
  sold_contact?: string;

  @Field(() => String, { nullable: true })
  sold_price?: string;

  @Field(() => Date, { nullable: true })
  death_date?: Date;

  @Field(() => String, { nullable: true })
  death_reason?: string;

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

  @Field(() => [Insurance])
  insurance: Insurance[];

  @Field(() => User)
  farmer: User;
}
