import { Component, OnInit } from '@angular/core';
import {MovieResults} from '../../model/movieResults';
import {ApiService} from '../../services/api.service';
import {Movie} from '../../model/movie';
import {FavouriteMovieService} from '../../services/favourite-movie.service';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  populars: Movie [] = [];

  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }


  searchName: string;

  ngOnInit() {
    return this.apiService.getPopularMovieData()
      .subscribe((data: MovieResults) => {
        console.log(data);
        this.populars = data.results;
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
