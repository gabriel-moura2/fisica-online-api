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
    const paramIds : string[] = ['disciplina', 'topico', 'subtopico', 'texto', 'atividade'];

    let page : Page = undefined;
    let current : any = {};

    while(params[paramIds[0]]) {
      const paramId = paramIds.shift();
      page = this.pages.find(pg => pg.segmento === params[paramId] && pg.paginaPai === page?.id);
      current[paramId] = page.titulo;
    }

    let pagina : any = page.pagina;
    console.log(pagina);
    if (pagina) {
      current.pagina = {};
      current.pagina.anterior = this.getUrl(pagina.anterior);
      current.pagina.proxima = this.getUrl(pagina.proxima);
    }

    let filhos : any = page.filhos;
    if (filhos) {
      current.filhos = [];
      for (let i = 0; i < filhos.length; i++) {
        current.filhos.push(this.getUrl(filhos[i]));
      }
    }

    return {
      ...page,
      ...current
    }
  }

  getUrl(id: number) : any {
    if (!id) return null;
    let url : string = '';
    let page : Page = this.pages.find(pg => pg.id === id);
    let titulo : string = page.titulo;

    while (page) {
      url = '/' + page.segmento + url;
      page = this.pages.find(pg => pg.id === page.paginaPai);
    }
    
    return { titulo, url };
  }
}