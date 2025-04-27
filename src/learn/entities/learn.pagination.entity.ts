import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { LearnData } from './learn.entity';

@ObjectType()
export class LearnPagination {
  @Field(() => [LearnData])
  data: LearnData[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}
