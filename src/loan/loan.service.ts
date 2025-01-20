import { Injectable } from '@nestjs/common';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';

@Injectable()
export class LoanService {
  create(createLoanInput: CreateLoanInput) {
    return 'This action adds a new loan';
  }

  findAll() {
    return `This action returns all loan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  update(id: number, updateLoanInput: UpdateLoanInput) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
