import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HealthreportService } from './healthreport.service';
import { Healthreport } from './entities/healthreport.entity';
import { CreateHealthreportInput } from './dto/create-healthreport.input';
import { UpdateHealthreportInput } from './dto/update-healthreport.input';

@Resolver(() => Healthreport)
export class HealthreportResolver {
  constructor(private readonly healthreportService: HealthreportService) {}

  @Mutation(() => Healthreport)
  createHealthreport(
    @Args('createHealthreportInput')
    createHealthreportInput: CreateHealthreportInput,
  ) {
    return this.healthreportService.createHealthreport(createHealthreportInput);
  }
}
