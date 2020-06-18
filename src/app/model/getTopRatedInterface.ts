import {GetTopRated} from './getTopRated';

export interface GetTopRatedInterface {
  page: number,
  total_results: number,
  total_page: number,
  results: [GetTopRated]
}
