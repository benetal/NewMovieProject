import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string = 'b1e86b5585ce562ad26b909dfeee3fcc';
  urlPopular: string = 'https://api.themoviedb.org/3/movie/popular?api_key='
  urlNewestMovie: string = 'https://api.themoviedb.org/3/movie/latest?api_key='

  constructor(public http: HttpClient) {
  }

  getPopularMovie() {
    return this.http.get(this.urlPopular + this.apiKey + '&language=en-US&page=1');
  }

  getNewestMovie() {
    return this.http.get(this.urlNewestMovie + this.apiKey + '&language=en-US');

  }

}
