import { Test, TestingModule } from '@nestjs/testing';
import { DressingsService } from './dressings.service';

describe('DressingsService', () => {
  let service: DressingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DressingsService],
    }).compile();

    service = module.get<DressingsService>(DressingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
