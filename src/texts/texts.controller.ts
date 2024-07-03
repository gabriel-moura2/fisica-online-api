import { Controller, Get } from '@nestjs/common';
import { TextsService } from './texts.service';
import { Text } from './interfaces/text.interface';

@Controller('texts')
export class TextsController {
    constructor(private readonly textsService: TextsService) {}

    @Get()
    findAll(): Text[] {
        return this.textsService.findAll();
    }
}
