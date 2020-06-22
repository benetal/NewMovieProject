import {GetNowPlaying} from './getNowPlaying';

export interface GetNowPlayingInterface {
  page: number,
  total_pages: number,
  total_results: number,
  dates: [],
  results: [GetNowPlaying]

}
