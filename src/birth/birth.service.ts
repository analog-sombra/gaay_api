import { Injectable } from '@nestjs/common';
import { CreateBirthInput } from './dto/create-birth.input';
import { UpdateBirthInput } from './dto/update-birth.input';

@Injectable()
export class BirthService {
  create(createBirthInput: CreateBirthInput) {
    return 'This action adds a new birth';
  }

  findAll() {
    return `This action returns all birth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} birth`;
  }

  update(id: number, updateBirthInput: UpdateBirthInput) {
    return `This action updates a #${id} birth`;
  }

  remove(id: number) {
    return `This action removes a #${id} birth`;
  }
}
