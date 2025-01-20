import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

@InputType()
export class SignUpUserInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @Length(8, 16, {
    message: 'Password must be between 8 to 16 characters long.',
  })
  @Matches(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter.',
  })
  @Matches(/[0-9]/, { message: 'Password must contain at least one number.' })
  @Matches(/[@$!%*?&#^+=-]/, {
    message: 'Password must contain at least one special character.',
  })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string;
}
