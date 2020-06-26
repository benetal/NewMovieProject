import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from "../model/movie";


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(nowPlayingMovies: Movie[], searchTerm: string): Movie [] {
    if (!nowPlayingMovies || !searchTerm) {
      return nowPlayingMovies;
    }
    return nowPlayingMovies.filter(nowPlayingMovies => nowPlayingMovies.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
