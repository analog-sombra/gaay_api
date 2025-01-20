import { Test, TestingModule } from '@nestjs/testing';
import { CowService } from './cow.service';

describe('CowService', () => {
  let service: CowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CowService],
    }).compile();

    service = module.get<CowService>(CowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
