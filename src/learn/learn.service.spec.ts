import { Test, TestingModule } from '@nestjs/testing';
import { LearnService } from './learn.service';

describe('LearnService', () => {
  let service: LearnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnService],
    }).compile();

    service = module.get<LearnService>(LearnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
