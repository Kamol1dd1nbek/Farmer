import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Farmer')
      .setDescription('Program for farm automation')
      .addTag('NestJs, MongoDb, JWT, OTP, Swagger')
      .setVersion('1.2')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('farm/docs', app, document);

    app.setGlobalPrefix("api");
     
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
};
start();