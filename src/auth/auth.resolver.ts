import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login.input';
import { SignUpUserInput } from './dto/register.input';
import { OtpInput } from './dto/otp.input';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => User)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(
      loginUserInput.mobile,
      loginUserInput.password,
    );
  }

  @Mutation(() => User)
  signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    return this.authService.signup(
      signUpUserInput.mobile,
      signUpUserInput.name,
      signUpUserInput.password,
    );
  }

  @Query(() => User)
  mobileLogin(@Args('mobile', { type: () => String }) mobile: string) {
    return this.authService.mobileLogin(mobile);
  }

  // @Mutation(() => Auth)
  // sendOtp(@Args('mobile', { type: () => String }) mobile: string) {
  //   return this.authService.sendOtp(mobile);
  // }

  // @Mutation(() => Auth)
  // verifyOtp(@Args('otpInput') otpInput: OtpInput) {
  //   return this.authService.verifyOtp(otpInput);
  // }

  // @Mutation(() => Auth)
  // forgetPassword(@Args('mobile', { type: () => String }) ph_number: string) {
  //   return this.authService.forgetPassword(ph_number);
  // }

  // @Query(() => Auth)
  // resetPassword(@Args('loginUserInput') loginUserInput: LoginUserInput) {
  //   return this.authService.resetPassword(
  //     loginUserInput.mobile,
  //     loginUserInput.password,
  //   );
  // }
}
