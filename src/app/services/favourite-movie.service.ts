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


  //adds a Movie into monoDB
  public insertOne(IFav: Favourite): Observable<any> {
    return this.http.post(this.baseUrl + '/favouritList', IFav);
  }

  //gets Favourite Movies from mongodb for FavouritesComponent
  public getFavouriteMovies(): Observable<Array<Favourite>> {
    return this.http.get<Array<Favourite>>(this.baseUrl + '/favouritList/');
  }

  //deletes selected Movie from mongoDB
  public deleteFavouriteMovie (IFav: Favourite): Observable<any> {
    const url = this.baseUrl + '/favouritList/' + IFav._id;
    return this.http.delete(url);
  }

}
