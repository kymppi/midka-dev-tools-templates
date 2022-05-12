import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validate } from './validation/env.validation';
import { SERVICENAMEHEREModule } from './SERVICEIDHERE/SERVICEIDHERE.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
    SERVICENAMEHEREModule,
  ],
})
export class AppModule {}
