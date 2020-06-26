import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {GetGenre} from '../../model/getGenre';
import {Movie} from '../../model/movie';



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

  }




  getMovieGenres() {
    this.apiService.getMovieGenre()
      .subscribe((data: GetGenre) => {
        console.log(data)
        this.movieGenres = data.genres;
      });
  }


  selectedGenreOnClick(id: number) {
    this.NowPlayingMovies.forEach(function(movie)  {
        if(movie.genre_ids.includes(id)){
          this.movieTemp.push(movie); }

      } .bind(this));

    this.nowPlayingMovies = this.movieTemp;
    console.log(this.movieTemp);
  }


}
