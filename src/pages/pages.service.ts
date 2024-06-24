import { Injectable } from '@nestjs/common';
import { Page } from './interfaces/page.interface';
import * as data from '../data/paginas.json';

@Injectable()
export class PagesService {
  private readonly pages: Page[] = data;

  findAll(): Page[] {
    return this.pages;
  }
}