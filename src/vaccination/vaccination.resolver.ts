import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VaccinationService } from './vaccination.service';
import { Vaccination } from './entities/vaccination.entity';
import { CreateVaccinationInput } from './dto/create-vaccination.input';
import { UpdateVaccinationInput } from './dto/update-vaccination.input';

@Resolver(() => Vaccination)
export class VaccinationResolver {
  constructor(private readonly vaccinationService: VaccinationService) {}

  @Mutation(() => Vaccination)
  createVaccination(@Args('createVaccinationInput') createVaccinationInput: CreateVaccinationInput) {
    return this.vaccinationService.create(createVaccinationInput);
  }

  // @Query(() => [Vaccination], { name: 'vaccination' })
  // findAll() {
  //   return this.vaccinationService.findAll();
  // }

  // @Query(() => Vaccination, { name: 'vaccination' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.vaccinationService.findOne(id);
  // }

  // @Mutation(() => Vaccination)
  // updateVaccination(@Args('updateVaccinationInput') updateVaccinationInput: UpdateVaccinationInput) {
  //   return this.vaccinationService.update(updateVaccinationInput.id, updateVaccinationInput);
  // }

  // @Mutation(() => Vaccination)
  // removeVaccination(@Args('id', { type: () => Int }) id: number) {
  //   return this.vaccinationService.remove(id);
  // }
}
