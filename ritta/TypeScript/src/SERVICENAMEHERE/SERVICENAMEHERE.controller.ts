import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SERVICENAMEHEREService } from './SERVICEIDHERE.service';
import { IEventType } from '@rittaschool/shared';
@Controller()
export class SERVICENAMEHEREController {
  constructor(
    @Inject('SERVICENAMEHEREUPPERCASE_SERVICE')
    private readonly SERVICEIDHEREService: SERVICENAMEHEREService,
  ) {}

  @MessagePattern(IEventType.STATUS)
  async status() {
    return {
      status: 'ok',
    };
  }
}
