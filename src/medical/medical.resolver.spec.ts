import { Test, TestingModule } from '@nestjs/testing';
import { MedicalResolver } from './medical.resolver';
import { MedicalService } from './medical.service';

describe('MedicalResolver', () => {
  let resolver: MedicalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalResolver, MedicalService],
    }).compile();

    resolver = module.get<MedicalResolver>(MedicalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
