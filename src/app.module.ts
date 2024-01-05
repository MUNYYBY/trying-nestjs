import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controllers/cat/cat.controller';
import { DogModule } from './controllers/dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule {}
