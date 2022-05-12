import { Test, TestingModule } from '@nestjs/testing';
import { SERVICENAMEHEREController } from './SERVICEIDHERE.controller';

describe('SERVICENAMEHEREController', () => {
  let controller: SERVICENAMEHEREController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SERVICENAMEHEREController],
      providers: [
        {
          provide: 'SERVICENAMEHEREUPPERCASE_SERVICE',
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SERVICENAMEHEREController>(
      SERVICENAMEHEREController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
