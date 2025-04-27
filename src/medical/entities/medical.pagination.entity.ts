import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Medical } from './medical.entity';

@ObjectType()
export class MedicalPagination {
  @Field(() => [Medical])
  data: Medical[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}
