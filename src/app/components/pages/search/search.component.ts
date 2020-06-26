import {Component, OnInit,} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {HttpClient} from "@angular/common/http";
import {FavouriteMovieService} from '../../../services/favourite-movie.service';
import {Movie} from "../../../model/Movie";
import {MovieResults} from "../../../model/MovieResults";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    movies: Movie [] = [];
    moviePath: string = 'http://image.tmdb.org/t/p/w500/';
    searchMovieInput: string;



  constructor(private apiService: ApiService, public http: HttpClient, public favouriteMovieService: FavouriteMovieService) {
  }



  ngOnInit() {
  }

  onClick(){
    this.apiService.getSearchData(this.searchMovieInput)
      .subscribe((data: MovieResults) => {
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
