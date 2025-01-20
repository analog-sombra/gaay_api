import { Injectable } from '@nestjs/common';
import { CreateLearnInput } from './dto/create-learn.input';
import { UpdateLearnInput } from './dto/update-learn.input';

@Injectable()
export class LearnService {
  create(createLearnInput: CreateLearnInput) {
    return 'This action adds a new learn';
  }

  findAll() {
    return `This action returns all learn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} learn`;
  }

  update(id: number, updateLearnInput: UpdateLearnInput) {
    return `This action updates a #${id} learn`;
  }

  remove(id: number) {
    return `This action removes a #${id} learn`;
  }
}
