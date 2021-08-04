import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const title = 'Territorial Division';
const description = 'Territorial Division api definition.';

/**
 * Setup swagger in the application boostrap
 * @param app {INestApplication}
 */
export const configSwagger = (app: INestApplication, apiVersion: string) => {
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(apiVersion)
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });

  SwaggerModule.setup(`${apiVersion}/territories/api`, app, document);
};
