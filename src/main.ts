import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule } from 'nestjs-redoc';
import { AppModule } from './app.module';

// TOOD: (ALREADY dockerized postgres DB)
// try the POST for inventories and make sure that the GET (list) returns it
// then pnpm run stop (update this to docker-compose down) and then do pnpm run start again
// ^^ test to see if the data still exists in the DB (due to volume)
// try to add E2E tests for inventories using nestjs in memory db
// make sure that works
// add JOI validation for request bodies & queries
// add the other controllers & entities
// add those E2E tests & unit tests
// make sure there is seed data for each of the tables so they have something to look at initially
// for the architecture design create a YAML file that has all of the routes and stuff
// (use my old yaml file from florence as an example)
// add Redoc swagger back in
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
