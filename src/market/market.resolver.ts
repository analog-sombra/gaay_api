import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarketService } from './market.service';
import { Market } from './entities/market.entity';
import { CreateMarketInput } from './dto/create-market.input';
import { UpdateMarketInput } from './dto/update-market.input';
import { Food } from './entities/food.entity';
import { Medicine } from './entities/medicine.entity';
import { CreateFoodInput } from './dto/create-food.input';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { MedicinePagination } from './entities/medicine.pagination.entity';
import { FoodPagination } from './entities/food.pagination.entity';
import { MarketPagination } from './entities/market.pagination.entity';

@Resolver(() => Market)
export class MarketResolver {
  constructor(private readonly marketService: MarketService) {}

  @Mutation(() => Market)
  addMarketCow(
    @Args('createMarketInput') createMarketInput: CreateMarketInput,
  ) {
    return this.marketService.addMarketCow(createMarketInput);
  }

  @Query(() => [Market])
  getMarketCow() {
    return this.marketService.getMarketCow();
  }

  @Query(() => [Food])
  getMarketFood() {
    return this.marketService.getMarketFood();
  }

  @Query(() => [Medicine])
  getMarketMedicine() {
    return this.marketService.getMarketMedicine();
  }

  @Mutation(() => Food)
  createMarketFood(@Args('createFoodInput') createFoodInput: CreateFoodInput) {
    return this.marketService.createMarketFood(createFoodInput);
  }

  @Mutation(() => Medicine)
  createMarketMedicine(
    @Args('createMedicineInput') createMedicineInput: CreateMedicineInput,
  ) {
    return this.marketService.createMarketMedicine(createMedicineInput);
  }

  @Query(() => FoodPagination)
  getMarketFoodByUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ) {
    return this.marketService.getMarketFoodByUser(id, skip, take);
  }

  @Query(() => MedicinePagination)
  getMarketMedicineByUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ) {
    return this.marketService.getMarketMedicineByUser(id, skip, take);
  }

  @Query(() => MarketPagination)
  getMarketCowByUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('take', { type: () => Int }) take: number,
  ) {
    return this.marketService.getMarketCowByUser(id, skip, take);
  }

  @Query(() => [Market])
  getAllMarketCowByUser(@Args('id', { type: () => Int }) id: number) {
    return this.marketService.getAllMarketCowByUser(id);
  }
}
