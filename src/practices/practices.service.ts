import { Injectable } from '@nestjs/common';
import { Practice } from './interfaces/practice.interface';
import * as data from '../data/practices.json';

@Injectable()
export class PracticesService {
  private readonly practices: Practice[] = data;

  findAll(): Practice[] {
    return this.practices;
  }
}