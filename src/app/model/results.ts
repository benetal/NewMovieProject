import {Popular} from './popular';


export interface Results {

  page: number;
  total_results: number;
  total_pages: number;
  results: [Popular];

}
