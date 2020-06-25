import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {HttpClient} from "@angular/common/http";
import {GetNowPlaying} from "../../model/getNowPlaying";
import {GetNowPlayingInterface} from "../../model/getNowPlayingInterface";
import {FavouriteMovieService} from '../../services/favourite-movie.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    movies: GetNowPlaying [] = [];
    moviePath: string = 'http://image.tmdb.org/t/p/w500/';
    searchMovieInput: string;



  constructor(private apiService: ApiService, public http: HttpClient, public favouriteMovieService: FavouriteMovieService) {
  }



  ngOnInit() {
  }

  onClick(){
    this.apiService.getSearchData(this.searchMovieInput)
      .subscribe((data: GetNowPlayingInterface) => {
        console.log(data)
        this.movies = data.results;
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
