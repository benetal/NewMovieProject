import { Pipe, PipeTransform } from '@angular/core';
import {GetNowPlaying} from "../model/getNowPlaying";
import {GetGenre} from "../model/getGenre";

@Pipe({
  name: 'genreFilter',

})
export class GenreFilterPipe implements PipeTransform {

  transform(movieGenres: [{id: number, name: string}], searchTerm: string) {
    if (!movieGenres || !searchTerm) {
      return movieGenres;
    }
    return movieGenres.filter(movieGenres => movieGenres.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
