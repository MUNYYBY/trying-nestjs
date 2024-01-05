import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [{ path: '/', method: RequestMethod.ALL }],
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(3000);
}
bootstrap();
