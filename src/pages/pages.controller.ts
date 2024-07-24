import { Controller, Get, Param } from '@nestjs/common';
import { PagesService } from './pages.service';
import { Page } from './interfaces/page.interface';

@Controller('pages')
export class PagesController {
    constructor(private readonly pagesService: PagesService) {}

    @Get()
    findAll(): Page[] {
        return this.pagesService.findAll();
    }

    @Get('id/:id')
    findById(@Param() params: any ): Page {
        return this.pagesService.findById(parseInt(params.id));
    }

    @Get(':disciplina')
    findDisciplina(@Param() params: any ): Page {
        return this.pagesService.findOne(params);
    }

    @Get(':disciplina/:topico')
    findTopico(@Param() params: any ): Page {
        return this.pagesService.findOne(params);
    }

    @Get(':disciplina/:topico/:subtopico')
    findSubtopico(@Param() params: any ): Page {
        return this.pagesService.findOne(params);
    }

    @Get(':disciplina/:topico/:subtopico/:texto')
    findTexto(@Param() params: any ): Page {
        return this.pagesService.findOne(params);
    }

    @Get(':disciplina/:topico/:subtopico/:texto/:atividade')
    findAtividade(@Param() params: any ): Page {
        return this.pagesService.findOne(params);
    }
}
