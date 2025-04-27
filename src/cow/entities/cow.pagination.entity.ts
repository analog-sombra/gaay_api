import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Cow } from './cow.entity';

@ObjectType()
export class CowPagination {
  @Field(() => [Cow])
  data: Cow[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}
