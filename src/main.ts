import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1');

  const docsConfig = new DocumentBuilder()
    .setTitle('Investio API')
    .setDescription('API documents for Investio project')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(8080);
}
bootstrap().catch((err) => console.error(err));
