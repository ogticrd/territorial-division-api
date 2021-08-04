import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as compression from 'compression';

import { AppModule } from './app.module';
import { configSwagger } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use(helmet());
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.enableVersioning();

  configSwagger(app, AppModule.apiVersion);

  await app.listen(AppModule.port);
}

bootstrap().then(() => {
  Logger.log('Application is up and running 🚀');
});
