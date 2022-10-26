import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /* it will ignore extra field from body.. 
       like if we send name , email and token and we are only
       expecting name and email (in the created DTO) then it will remove
       the token field*/
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
