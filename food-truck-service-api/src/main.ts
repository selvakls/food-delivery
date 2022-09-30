import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  await app.listen(3000);
}
bootstrap();
