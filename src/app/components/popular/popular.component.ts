import {Component, Input, OnInit, Output} from '@angular/core';
import {Results} from '../../model/results';
import {ApiService} from '../../services/api.service';
import {Popular} from '../../model/popular';
import {FavouriteMovieService} from '../../services/favourite-movie.service';
import {Ifavourite} from '../../model/Ifavourite';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  populars: Popular [] = [];

  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }

  movieIdNumber: string;
  movieTitle: string;

  @Input() favouritList: Array<Ifavourite>;

  ngOnInit() {
    return this.apiService.getPopularMovie()
      .subscribe((data: Results) => {
        console.log(data);
        this.populars = data.results;
      });
  }

  // onAddToFavourites(popular) {
  //   this.movieIdNumber = popular.id;
  //   this.movieTitle = popular.title;
  //   const favMovie = {favMovieIdNumber: this.movieIdNumber, favMovieTitle: this.movieTitle};
  //   this.favouriteMovieService.insertMovie(favMovie)
  //     .subscribe((response: any) => {
  //     this.movieIdNumber = '';
  //     this.movieTitle = '';
  //   });
  // }

  // onAddToFavourites(popular) {
  //   console.log(popular.id);
  //   console.log(popular.title);
  //
  //   const favMovie = {favMovieTitle: this.movieTitle};
  //   this.favouriteMovieService.insertMovie(favMovie)
  //     .subscribe((response: any) => {
  //       // this.movieIdNumber = popular.id;
  //       this.movieTitle = ' peter meiers movie';
  //       // console.log(this.movieTitle);
  //       console.log(this.movieTitle);
  //     });
  // }

  onAddToFavourites(popular) {
    console.log(popular.id);
    console.log(popular.title);

    const favMovie = {favMovieTitle: this.movieTitle};
    this.favouriteMovieService.insertOne(favMovie)
      .subscribe((response: any) => {
        // this.movieIdNumber = popular.id;
        this.movieTitle = popular.title;
        // console.log(this.movieTitle);
        console.log(this.movieTitle);
      });
  }



}
