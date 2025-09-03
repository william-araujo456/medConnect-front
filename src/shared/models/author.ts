import {ModelBase} from './model-base';

export class Author extends ModelBase {
  title: string;
  date: Date;
  author: number | string | Author;
}
