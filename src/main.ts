import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow any origin for simplicity (you can tighten this in production)
  app.enableCors();

  // Listen on environment port OR fallback to 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
