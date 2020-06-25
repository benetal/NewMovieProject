import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {GetGenre} from "../../model/getGenre";
import {GetNowPlaying} from "../../model/getNowPlaying";

@Component({
  selector: 'app-genre-checkbox',
  templateUrl: './genre-checkbox.component.html',
  styleUrls: ['./genre-checkbox.component.css']
})
export class GenreCheckboxComponent implements OnInit {

  movieGenres: [{id:number, name: string}];
  myMovies: GetNowPlaying [] = [];



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
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


  }
}
