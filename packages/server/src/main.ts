import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const env = process.env.NODE_ENV || 'develop';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  if (env === 'develop') {
    // 開発環境は別コンテナで起動するためCORSを許可する
    app.enableCors();

    // OpenAPIの設定
    const config = new DocumentBuilder()
      .setTitle('TODO App API example')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
