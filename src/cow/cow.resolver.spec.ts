import { Test, TestingModule } from '@nestjs/testing';
import { CowResolver } from './cow.resolver';
import { CowService } from './cow.service';

describe('CowResolver', () => {
  let resolver: CowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CowResolver, CowService],
    }).compile();

    resolver = module.get<CowResolver>(CowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
