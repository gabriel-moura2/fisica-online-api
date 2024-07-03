import { Controller, Get } from '@nestjs/common';
import { PracticesService } from './practices.service';
import { Practice } from './interfaces/practice.interface';

@Controller('practices')
export class PracticesController {
    constructor(private readonly practicesService: PracticesService) {}

    @Get()
    findAll(): Practice[] {
        return this.practicesService.findAll();
    }
}
