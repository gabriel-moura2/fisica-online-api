import { Module } from '@nestjs/common';
import { PagesController } from './pages/pages.controller';
import { PagesService } from './pages/pages.service';

@Module({
  imports: [],
  controllers: [PagesController],
  providers: [PagesService],
})
export class AppModule {}
