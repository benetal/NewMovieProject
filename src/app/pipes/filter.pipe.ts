import {Pipe, PipeTransform} from '@angular/core';
import {PopularComponent} from '../components/popular/popular.component';
import {NowPlayingMovieComponent} from "../components/now-playing-movie/now-playing-movie.component";
import {GetNowPlayingInterface} from "../model/getNowPlayingInterface";
import {GetNowPlaying} from "../model/getNowPlaying";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

/*  transform(value: any, mTitle: string): any {
    if (mTitle === '') {
      return value;
    }
    const popularArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      const popularName: string = value[i].title;
      if (popularName.startsWith(mTitle)) {
        popularArray.push(value[i]);
      }
    }
    return popularArray;
  }*/

  transform(nowPlayingMovies: GetNowPlaying[], searchTerm: string): GetNowPlaying [] {
    if (!nowPlayingMovies || !searchTerm) {
      return nowPlayingMovies;
    }
    return nowPlayingMovies.filter(nowPlayingMovies => nowPlayingMovies.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
