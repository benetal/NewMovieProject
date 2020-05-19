import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*API_KEY = 'b1e86b5585ce562ad26b909dfeee3fcc';*/
  apiKey: string = 'b1e86b5585ce562ad26b909dfeee3fcc';
  urlFirst: string = 'https://api.themoviedb.org/3/movie/popular?api_key='

  constructor(public http: HttpClient) {
  }
//getPopularMovie
  getMovie() {
    return this.http.get(this.urlFirst + this.apiKey + '&language=en-US&page=1');
  }

/*
  getImages() {
    return this.http.get('https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=' + this.apiKey + '&language=en-US');
  }
*/

}
