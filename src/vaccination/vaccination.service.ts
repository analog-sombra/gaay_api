import { Injectable } from '@nestjs/common';
import { CreateVaccinationInput } from './dto/create-vaccination.input';
import { UpdateVaccinationInput } from './dto/update-vaccination.input';

@Injectable()
export class VaccinationService {
  create(createVaccinationInput: CreateVaccinationInput) {
    return 'This action adds a new vaccination';
  }

  // findAll() {
  //   return `This action returns all vaccination`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} vaccination`;
  // }

  // update(id: number, updateVaccinationInput: UpdateVaccinationInput) {
  //   return `This action updates a #${id} vaccination`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vaccination`;
  // }
}
