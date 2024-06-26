import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule } from 'nestjs-redoc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Candy Store')
    .setDescription('Candy Store API.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  await RedocModule.setup('/api', app, document, {});

  await app.listen(3000);
}
bootstrap();
