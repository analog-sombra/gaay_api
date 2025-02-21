import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoanService } from './loan.service';
import { Loan } from './entities/loan.entity';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';

@Resolver(() => Loan)
export class LoanResolver {
  constructor(private readonly loanService: LoanService) {}

  @Query(() => Loan)
  getUserCurrentLoan(@Args('id', { type: () => Int }) id: number) {
    return this.loanService.getUserCurrentLoan(id);
  }

}
