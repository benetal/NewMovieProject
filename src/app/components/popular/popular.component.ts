import {Component, OnInit} from '@angular/core';
import {MovieResults} from '../../model/movieResults';
import {ApiService} from '../../services/api.service';
import {Movie} from '../../model/movie';
import {FavouriteMovieService} from '../../services/favourite-movie.service';
import {GetGenre} from '../../model/getGenre';


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
        console.log(data);
        this.nowPlayingMovies = data.results;
        this.NowPlayingMovies = data.results;
      });

  }

  getMovieGenres() {
    this.apiService.getMovieGenre()
      .subscribe((data: GetGenre) => {
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
