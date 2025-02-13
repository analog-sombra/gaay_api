import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Category, Role, Status } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
});

registerEnumType(Status, {
  name: 'Status',
});
registerEnumType(Category, {
  name: 'Category',
});

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  photo?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  alias?: string;

  @Field(() => String)
  contact: string;

  @Field(() => String, { nullable: true })
  contact_two?: string;

  @Field(() => String, { nullable: true })
  beneficiary_code?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  village?: string;

  @Field(() => String, { nullable: true })
  district?: string;

  @Field(() => Role)
  role: Role;

  @Field(() => String, { nullable: true })
  remark?: string;

  @Field(() => String, { nullable: true })
  occupation?: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Category)
  category: Category;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
