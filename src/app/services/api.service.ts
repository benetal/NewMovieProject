import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string = 'b1e86b5585ce562ad26b909dfeee3fcc';
  urlPopular: string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  urlNowPlaying: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  urlTopRated: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';


  constructor(public http: HttpClient) {
  }

  getPopularMovieData() {
    return this.http.get(this.urlPopular + this.apiKey + '&language=en-US&page=1');
  }

  getNowPlayingMovieData() {
    return this.http.get(this.urlNowPlaying + this.apiKey + '&language=en-US&page=1');
  }

  getTopRatedData() {
    return this.http.get(this.urlTopRated + this.apiKey + '&language=en-US&page=1');
  }

}

// https://api.themoviedb.org/3/movie/latest?api_key=b1e86b5585ce562ad26b909dfeee3fcc&language=en-US
