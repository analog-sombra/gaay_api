import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarketService } from './market.service';
import { Market } from './entities/market.entity';
import { CreateMarketInput } from './dto/create-market.input';
import { UpdateMarketInput } from './dto/update-market.input';
import { Food } from './entities/food.entity';
import { Medicine } from './entities/medicine.entity';

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
}
