import { Injectable } from '@nestjs/common';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';

@Injectable()
export class BreedService {
  create(createBreedInput: CreateBreedInput) {
    return 'This action adds a new breed';
  }

  findAll() {
    return `This action returns all breed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} breed`;
  }

  update(id: number, updateBreedInput: UpdateBreedInput) {
    return `This action updates a #${id} breed`;
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
