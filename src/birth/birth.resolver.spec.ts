import { Test, TestingModule } from '@nestjs/testing';
import { BirthResolver } from './birth.resolver';
import { BirthService } from './birth.service';

describe('BirthResolver', () => {
  let resolver: BirthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthResolver, BirthService],
    }).compile();

    resolver = module.get<BirthResolver>(BirthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
