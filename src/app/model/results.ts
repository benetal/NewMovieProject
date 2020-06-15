import {Popular} from './popular';
import {Newest} from './newest';


export interface Results {

  page: number,
  total_results: number,
  total_pages: number,
  popularMovies: [Popular],
  newestMovies: [Newest]


}
