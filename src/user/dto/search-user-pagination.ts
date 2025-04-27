import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SearchUserPaginationInput {
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
  @Field(() => [Role], { nullable: true })
  roles?: Role[];
}
