import { Test, TestingModule } from '@nestjs/testing';
import { CowroomTypesService } from './cowroom_types.service';

describe('CowroomTypesService', () => {
  let service: CowroomTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CowroomTypesService],
    }).compile();

    service = module.get<CowroomTypesService>(CowroomTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
