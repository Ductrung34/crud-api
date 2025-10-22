import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('CRUD API') // tiêu đề của API
    .setDescription('NestJS + Oracle + Swagger') // mô tả của API
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // ✅ Swagger UI tại /api
  console.log('✅ Swagger UI available at http://localhost:3000/api');

  await app.listen(3000);
}
bootstrap();
