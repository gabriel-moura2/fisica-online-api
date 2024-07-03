import { Injectable } from '@nestjs/common';
import { Text } from './interfaces/text.interface';
import * as data from '../data/texts.json';

@Injectable()
export class TextsService {
  private readonly texts: Text[] = data;

  findAll(): Text[] {
    return this.texts;
  }
}