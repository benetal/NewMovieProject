import {Component, OnInit} from '@angular/core';
import {MovieResults} from '../../../model/MovieResults';
import {ApiService} from '../../../services/api.service';
import {Movie} from '../../../model/Movie';
import {FavouriteMovieService} from '../../../services/favourite-movie.service';
import {Genre} from '../../../model/Genre';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  nowPlayingMovies: Movie [] = [];
  searchName: string;
  posterPath: string = 'http://image.tmdb.org/t/p/w500';
  movieGenres: [{id:number, name: string}];
  movieTemp: Movie [] = [];

  NowPlayingMovies: Array<Movie>;


  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }



  ngOnInit() {
    this.getMovieGenres();


    return this.apiService.getPopularMovieData()
      .subscribe((data: MovieResults) => {
        this.nowPlayingMovies = data.results;
        this.NowPlayingMovies = data.results;
      });

  }


  getMovieGenres() {
    this.apiService.getMovieGenreData()
      .subscribe((data: Genre) => {
        this.movieGenres = data.genres;
      });
  }


  selectedGenreOnClick(id: number) {
    this.NowPlayingMovies.forEach(function (movie)  {
        if(movie.genre_ids.includes(id)){
          this.movieTemp.push(movie);
        }

      } .bind(this)
    );
    this.nowPlayingMovies = this.movieTemp;
  }


  onAddToFavourites(popular) {
    const favMovie = {favMovieTitle: popular.title, favMovieIdNumber: popular.id, favMoviePosterPath: popular.poster_path};
    this.favouriteMovieService.insertOne(favMovie)
      .subscribe((response: any) => {
      });
  }



}
