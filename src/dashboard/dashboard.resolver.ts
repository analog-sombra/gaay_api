import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DashboardService } from './dashboard.service';

import { DashboardCowReportData, DashboardData, DashboardMedicalReportData, DashboardUserReportData } from './entities/dashboard.entity';
import { TreatmentData } from './entities/treatment.entity';
import { CowReportData } from './entities/cowreport.entity';
import { UserReportData } from './entities/userreport.entity';

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

  @Query(() => [CowReportData])
  cowReport() {
    return this.dashboardService.cowReport();
  }

  @Query(() => [UserReportData])
  userReport() {
    return this.dashboardService.userReport();
  }

  @Query(() => DashboardUserReportData)
  dashboardUserReport() {
    return this.dashboardService.dashboardUserReport();
  }
  
  @Query(() => DashboardCowReportData)
  dashboardCowReport() {
    return this.dashboardService.dashboardCowReport();
  }

  @Query(() => DashboardMedicalReportData)
  dashboardMedicalReport() {
    return this.dashboardService.dashboardMedicalReport();
  }




}
