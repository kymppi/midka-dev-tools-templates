import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { transports } from 'winston';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { consoleFormat } from './logger.format';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${process.env.RMQ_PASSWORD}:${process.env.RMQ_USERNAME}@${process.env.RMQ_HOST}:${process.env.RMQ_PORT}/`,
        ],
        queue: 'SERVICEIDHERE',
        queueOptions: {
          durable: true,
        },
      },
      logger: WinstonModule.createLogger({
        defaultMeta: { service: 'users', enviroment: process.env.NODE_ENV },
        transports: [
          new transports.Console({
            format: consoleFormat,
          }),
          new transports.File({ filename: 'logs/all.log' }),
        ],
      }),
    },
  );

  app
    .listen()
    .then(() => console.log(`SERVICENAMEHERE service is online`))
    .catch(console.error);
}
bootstrap();
