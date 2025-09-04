import {ModelBase} from './model-base';
import {Author} from './author';

export class Album extends ModelBase {
  title: string;
  date: Date;
  author: number | string | Author;
}
