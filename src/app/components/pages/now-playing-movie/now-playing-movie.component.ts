import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Genre} from '../../../model/Genre';
import {FavouriteMovieService} from '../../../services/favourite-movie.service';
import {Movie} from '../../../model/Movie';
import {MovieResults} from '../../../model/MovieResults';


@Component({
  selector: 'app-now-playing-movie',
  templateUrl: './now-playing-movie.component.html',
  styleUrls: ['./now-playing-movie.component.css']
})
export class NowPlayingMovieComponent implements OnInit {

  nowPlayingMovies: Movie [] = [];
  searchName: string;
  posterPath: string = 'http://image.tmdb.org/t/p/w500';
  movieGenres: [{id:number, name: string}];
  movieTemp: Movie [] = [];

  NowPlayingMovies: Array<Movie>;


  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) {
  }

  ngOnInit() {

    this.getMovieGenres();
    return this.apiService.getNowPlayingMovieData()
      .subscribe((data: MovieResults) => {
        console.log(data)
        this.nowPlayingMovies = data.results;
        this.NowPlayingMovies = data.results;
      });

  }


  getMovieGenres() {
    this.apiService.getMovieGenre()
      .subscribe((data: Genre) => {
        console.log(data)
        this.movieGenres = data.genres;
      });
  }


  selectedGenreOnClick(id: number) {
    console.log(this.nowPlayingMovies);
    this.NowPlayingMovies.forEach(function (movie)  {
        if(movie.genre_ids.includes(id)){
          this.movieTemp.push(movie);
        }

      } .bind(this)
    );
    this.nowPlayingMovies = this.movieTemp;
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
