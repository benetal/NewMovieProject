import { Component, OnInit } from '@angular/core';
import {GetTopRated} from '../../model/getTopRated';
import {ApiService} from '../../services/api.service';
import {GetTopRatedInterface} from '../../model/getTopRatedInterface';
import {FavouriteMovieService} from '../../services/favourite-movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRated: GetTopRated [] = [];

  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }

  ngOnInit() {
    return this.apiService.getTopRatedData()
      .subscribe((data: GetTopRatedInterface) => {
        // console.log(data);
        this.topRated  = data.results;
      });
  }

  onAddToFavourites(popular) {
    console.log(popular.id);
    console.log(popular.title);
    const favMovie = {favMovieTitle: popular.title, favMovieIdNumber: popular.id, favMoviePosterPath: popular.poster_path};
    this.favouriteMovieService.insertOne(favMovie)
      .subscribe((response: any) => {
      });
  }
}
