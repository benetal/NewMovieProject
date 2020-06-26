import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Favourite} from '../model/Favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMovieService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';


  public insertOne(Ifav: Favourite): Observable<any> {
    return this.http.post(this.baseUrl + '/favouritList', Ifav);
  }

  public getMovies(): Observable<Array<Favourite>> {
    return this.http.get<Array<Favourite>>(this.baseUrl + '/favouritList/');
  }

  public deleteFavouriteMovie (IFav: Favourite): Observable<any> {
    const url = this.baseUrl + '/favouritList/' + IFav._id;
    return this.http.delete(url);
  }

}
