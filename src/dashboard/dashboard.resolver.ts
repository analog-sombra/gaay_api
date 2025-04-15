import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DashboardService } from './dashboard.service';

import { DashboardData } from './entities/dashboard.entity';
import { TreatmentData } from './entities/treatment.entity';

@Resolver(() => DashboardData)
export class DashboardResolver {
  constructor(private readonly dashboardService: DashboardService) {}

  @Query(() => DashboardData)
  getDashbordData() {
    return this.dashboardService.getDashbordData();
  }

  @Query(() => TreatmentData)
  treatmentGraph(@Args('year', { type: () => String }) year: string) {
    return this.dashboardService.treatmentGraph(year);
  }
}
