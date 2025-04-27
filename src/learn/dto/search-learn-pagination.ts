import { InputType, Int, Field } from '@nestjs/graphql';
import { Learn } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SearchLearnPaginationInput {
  @IsNumber()
  @Field(() => Int)
  skip: number;

  @IsString()
  @Field(() => Int)
  take: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search: string;

  @IsOptional()
  @Field(() => Learn, { nullable: true })
  learn?: Learn;
}
