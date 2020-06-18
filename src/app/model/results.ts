import {Popular} from './popular';
import {Newest} from './newest';
import {GetTopRated} from './getTopRated';


export interface Results {

  page: number;
  total_results: number;
  total_pages: number;
  results: [Popular];


}
