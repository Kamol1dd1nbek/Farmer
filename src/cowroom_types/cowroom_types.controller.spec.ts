import { Test, TestingModule } from '@nestjs/testing';
import { CowroomTypesController } from './cowroom_types.controller';
import { CowroomTypesService } from './cowroom_types.service';

describe('CowroomTypesController', () => {
  let controller: CowroomTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CowroomTypesController],
      providers: [CowroomTypesService],
    }).compile();

    controller = module.get<CowroomTypesController>(CowroomTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
