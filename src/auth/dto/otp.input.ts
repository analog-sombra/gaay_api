import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class OtpInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  otp: string;
}
