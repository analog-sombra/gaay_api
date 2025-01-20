import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarketService } from './market.service';
import { Market } from './entities/market.entity';
import { CreateMarketInput } from './dto/create-market.input';
import { UpdateMarketInput } from './dto/update-market.input';

@Resolver(() => Market)
export class MarketResolver {
  constructor(private readonly marketService: MarketService) {}

  @Mutation(() => Market)
  createMarket(@Args('createMarketInput') createMarketInput: CreateMarketInput) {
    return this.marketService.create(createMarketInput);
  }

  @Query(() => [Market], { name: 'market' })
  findAll() {
    return this.marketService.findAll();
  }

  @Query(() => Market, { name: 'market' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.marketService.findOne(id);
  }

  @Mutation(() => Market)
  updateMarket(@Args('updateMarketInput') updateMarketInput: UpdateMarketInput) {
    return this.marketService.update(updateMarketInput.id, updateMarketInput);
  }

  @Mutation(() => Market)
  removeMarket(@Args('id', { type: () => Int }) id: number) {
    return this.marketService.remove(id);
  }
}
