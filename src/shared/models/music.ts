import {ModelBase} from './model-base';
import {Album} from './album';

export class Music extends ModelBase {
  title: string;
  duration: number;
  album: number | string | Album;
}
