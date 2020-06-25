import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {GetGenre} from '../../model/getGenre';
import {Movie} from '../../model/movie';
import {MovieResults} from "../../model/movieResults";



@Component({
  selector: 'app-genre-checkbox',
  templateUrl: './genre-checkbox.component.html',
  styleUrls: ['./genre-checkbox.component.css']
})
export class GenreCheckboxComponent implements OnInit {

  movieGenres: [{id:number, name: string}];
  movieTemp: Movie [] = [];
  nowPlayingMovies: Movie [] = [];


  @Input() NowPlayingMovies: Array<Movie>;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMovieGenres();

    return this.apiService.getPopularMovieData()
      .subscribe((data: MovieResults) => {
        console.log(data);
        this.nowPlayingMovies = data.results;
        this.NowPlayingMovies = data.results;
      });

  }

  ngOnChanges() {
    this.nowPlayingMovies = this.NowPlayingMovies;
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
    this.movieTemp = [];
    this.NowPlayingMovies.forEach(function(movie)  {
        if(movie.genre_ids.includes(id)){
          this.movieTemp.push(movie)
        }

      } .bind(this)
    );
    this.nowPlayingMovies = this.movieTemp;
  }

}
