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


  searchName: string;

  ngOnInit() {
    return this.apiService.getPopularMovieData()
      .subscribe((data: GetNowPlayingInterface) => {
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
