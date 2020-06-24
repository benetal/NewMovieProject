import { Component, OnInit } from '@angular/core';
import {Results} from '../../model/results';
import {ApiService} from '../../services/api.service';
import {Popular} from '../../model/popular';
import {FavouriteMovieService} from '../../services/favourite-movie.service';
import {GetNowPlaying} from '../../model/getNowPlaying';
import {GetNowPlayingInterface} from '../../model/getNowPlayingInterface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  populars: GetNowPlaying [] = [];

  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }

  movieIdNumber: string;
  movieTitle: string;
  moviePosterPath: string;
  searchName: string;

  ngOnInit() {
    return this.apiService.getPopularMovieData()
      .subscribe((data: GetNowPlayingInterface) => {
        console.log(data)
        this.populars = data.results;
      });
  }


  onAddToFavourites(popular) {
    console.log(popular.id);
    console.log(popular.title);

    const favMovie = {favMovieTitle: this.movieTitle, favMovieIdNumber: this.movieIdNumber, favMoviePosterPath: this.moviePosterPath};
    this.favouriteMovieService.insertOne(favMovie)
      .subscribe((response: any) => {
        // this.movieIdNumber = popular.id;
        this.movieTitle = popular.title;
        // console.log(this.movieTitle);
        console.log(this.movieTitle);
      });
  }

}
