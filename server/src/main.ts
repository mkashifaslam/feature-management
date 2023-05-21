import {NestFactory} from '@nestjs/core';
import {PrismaService} from "./prisma.service";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {FeaturesModule} from "./features/features.module";

async function bootstrap() {
  const app = await NestFactory.create(FeaturesModule);
  app.enableCors();
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const config = new DocumentBuilder()
    .setTitle('Features Management')
    .setDescription('The is features management rest apis')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}

bootstrap();
