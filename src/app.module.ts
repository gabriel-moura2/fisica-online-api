import { Module } from '@nestjs/common';
import { PagesController } from './pages/pages.controller';
import { PagesService } from './pages/pages.service';
import { TextsController } from './texts/texts.controller';
import { PracticesController } from './practices/practices.controller';
import { TextsService } from './texts/texts.service';
import { PracticesService } from './practices/practices.service';

@Module({
  imports: [],
  controllers: [PagesController, TextsController, PracticesController],
  providers: [PagesService, TextsService, PracticesService],
})
export class AppModule {}
