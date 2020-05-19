import {Movies} from './movies';
import {Images} from './images';

export interface Results {

  page: number,
  total_results: number,
  total_pages: number,
  results: [Movies],
  pictures: [Images]

}
