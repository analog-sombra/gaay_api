import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Medicine } from './medicine.entity';

@ObjectType()
export class MedicinePagination {
  @Field(() => [Medicine])
  data: Medicine[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}
