import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const initApp = await NestFactory.create(AppModule);
  initApp.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Accounts Sercvice')
    .setDescription('REST APIs description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(initApp, config);
  SwaggerModule.setup('api/v1/swagger', initApp, document);
  await initApp.listen(5002);

  const initService = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { host: '0.0.0.0', port: 5003 },
    },
  );

  await initService.listen();

  const initRedis = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    },
  );

  await initRedis.listen();
}
bootstrap();
