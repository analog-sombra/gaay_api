import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@ObjectType()
export class Breed {
  @Field(() => Int)
  id: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
