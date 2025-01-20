import { Injectable } from '@nestjs/common';
import { CreateMarketInput } from './dto/create-market.input';
import { UpdateMarketInput } from './dto/update-market.input';

@Injectable()
export class MarketService {
  create(createMarketInput: CreateMarketInput) {
    return 'This action adds a new market';
  }

  findAll() {
    return `This action returns all market`;
  }

  findOne(id: number) {
    return `This action returns a #${id} market`;
  }

  update(id: number, updateMarketInput: UpdateMarketInput) {
    return `This action updates a #${id} market`;
  }

  remove(id: number) {
    return `This action removes a #${id} market`;
  }
}
