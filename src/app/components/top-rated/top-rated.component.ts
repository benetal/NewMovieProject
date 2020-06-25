import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FavouriteMovieService} from '../../services/favourite-movie.service';
import {Movie} from "../../model/movie";
import {MovieResults} from "../../model/movieResults";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRated: Movie [] = [];

  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }

  ngOnInit() {
    return this.apiService.getTopRatedData()
      .subscribe((data: MovieResults) => {
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
