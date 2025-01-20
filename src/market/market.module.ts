import { Module } from '@nestjs/common';
import { MarketService } from './market.service';
import { MarketResolver } from './market.resolver';

@Module({
  providers: [MarketResolver, MarketService],
})
export class MarketModule {}
