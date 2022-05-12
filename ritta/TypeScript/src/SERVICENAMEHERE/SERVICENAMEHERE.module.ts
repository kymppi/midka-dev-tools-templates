import { Module } from '@nestjs/common';
import { SERVICENAMEHEREService } from './SERVICEIDHERE.service';
import { SERVICENAMEHEREController } from './SERVICEIDHERE.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SERVICENAMEHEREController],
  imports: [ConfigModule],
  providers: [
    {
      provide: 'SERVICENAMEHEREUPPERCASE_SERVICE',
      useClass: SERVICENAMEHEREService,
    },
  ],
})
export class SERVICENAMEHEREModule {}
