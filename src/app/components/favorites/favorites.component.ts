import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FavouriteMovieService} from '../../services/favourite-movie.service';
import {Ifavourite} from '../../model/Ifavourite';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) {
  }

  @Input() favMovieListFromMongoDB: Array<Ifavourite> = [];


  ngOnInit() {
    this.getFavMovieList();
  }

  getFavMovieList() {
    this.favouriteMovieService.getMovies()
      .subscribe((data: Array<Ifavourite>) => {
        this.favMovieListFromMongoDB = data;
      });
  }

  deleteFavouritMovie(index: number): void {
    this.favouriteMovieService.deleteFavouritMovie(this.favMovieListFromMongoDB[index])
      .subscribe((response: any) => {
        this.getFavMovieList();
      });
  }

}
