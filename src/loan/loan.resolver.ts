import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoanService } from './loan.service';
import { Loan } from './entities/loan.entity';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';

@Resolver(() => Loan)
export class LoanResolver {
  constructor(private readonly loanService: LoanService) {}

  @Mutation(() => Loan)
  createLoan(@Args('createLoanInput') createLoanInput: CreateLoanInput) {
    return this.loanService.create(createLoanInput);
  }

  @Query(() => [Loan], { name: 'loan' })
  findAll() {
    return this.loanService.findAll();
  }

  @Query(() => Loan, { name: 'loan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.loanService.findOne(id);
  }

  @Mutation(() => Loan)
  updateLoan(@Args('updateLoanInput') updateLoanInput: UpdateLoanInput) {
    return this.loanService.update(updateLoanInput.id, updateLoanInput);
  }

  @Mutation(() => Loan)
  removeLoan(@Args('id', { type: () => Int }) id: number) {
    return this.loanService.remove(id);
  }
}
