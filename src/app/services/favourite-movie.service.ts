import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ifavourite} from '../model/Ifavourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMovieService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';


  public insertOne(Ifav: Ifavourite): Observable<any> {
    return this.http.post(this.baseUrl + '/favouritList', Ifav);
  }

  public getMovies(): Observable<Array<Ifavourite>> {
    return this.http.get<Array<Ifavourite>>(this.baseUrl + '/favouritList/');
  }

  public deleteFavouritMovie (IFav: Ifavourite): Observable<any> {
    const url = this.baseUrl + '/favouritList/' + IFav._id;
    // const url = this.baseUrl + '/favouritList/' + IFav._id;
    return this.http.delete(url);
  }

}
