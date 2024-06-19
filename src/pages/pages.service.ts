import { Injectable } from '@nestjs/common';
import { Page } from './interfaces/page.interface';

@Injectable()
export class PagesService {
  private readonly pages: Page[] = [
    { id: 1, titulo: 'Física', segmento: 'fisica' },
    { id: 2, titulo: 'Termologia', segmento: 'termologia', parentId: 1 },
    {
        id: 3,
        titulo: 'Calorimetria',
        segmento: 'calorimetria',
        parentId: 2
    },
    {
        id: 4,
        titulo: 'Calorimetria I',
        segmento: 'texto01',
        autor: {
            nome: 'Prof. Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 13, anterior: null },
        parentId: 3
    },
    {
        id: 5,
        titulo: 'Lista 01',
        segmento: 'lista01',
        autor: {
            nome: 'Geraldo Felipe',
            data: '2023'
        },
        pagina: { proxima: 6, anterior: null },
        parentId: 4
    }
  ];

  findAll(): Page[] {
    return this.pages;
  }
}