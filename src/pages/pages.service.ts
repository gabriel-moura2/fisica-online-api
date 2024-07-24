import { Injectable } from '@nestjs/common';
import { Page } from './interfaces/page.interface';
import * as data from '../data/pages.json';

@Injectable()
export class PagesService {
  private readonly pages: Page[] = data;

  findAll(): Page[] {
    return this.pages;
  }

  findOne(params: any ): Page {
    console.log(params);
    const paramIds = ['disciplina', 'topico', 'subtopico', 'texto', 'atividade'];

    let current : Page = undefined;

    while(params[paramIds[0]]) {
      const paramId = paramIds.shift();
      current = this.pages.find(page => page.segmento === params[paramId]);
    }

    return current;
  }
}