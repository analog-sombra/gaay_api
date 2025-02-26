import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateMarketInput {
  @IsNumber()
  @Field(() => Int)
  cowid: number;

  @IsNumber()
  @Field(() => Int)
  farmerid: number;

  @IsString()
  @Field(() => String)
  price: string;

  @IsBoolean()
  @Field(() => Boolean)
  verified: boolean;

  @IsString()
  @Field(() => String)
  remarks: string;

  @IsEnum(Status)
  @Field(() => Status)
  status: Status;
}
