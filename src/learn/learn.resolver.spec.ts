import { Test, TestingModule } from '@nestjs/testing';
import { LearnResolver } from './learn.resolver';
import { LearnService } from './learn.service';

describe('LearnResolver', () => {
  let resolver: LearnResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnResolver, LearnService],
    }).compile();

    resolver = module.get<LearnResolver>(LearnResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
