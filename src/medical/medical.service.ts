import { Injectable } from '@nestjs/common';
import { CreateMedicalInput } from './dto/create-medical.input';
import { UpdateMedicalInput } from './dto/update-medical.input';

@Injectable()
export class MedicalService {
  create(createMedicalInput: CreateMedicalInput) {
    return 'This action adds a new medical';
  }

  findAll() {
    return `This action returns all medical`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medical`;
  }

  update(id: number, updateMedicalInput: UpdateMedicalInput) {
    return `This action updates a #${id} medical`;
  }

  remove(id: number) {
    return `This action removes a #${id} medical`;
  }
}
