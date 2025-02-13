import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class OtpInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  code: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  otp: string;
}
