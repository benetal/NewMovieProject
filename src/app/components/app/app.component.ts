import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Movies} from '../../model/movies';
import {Results} from '../../model/results';
import {Images} from '../../model/images';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movies []=[];
  images: Images []=[];

  constructor(private apiService: ApiService) {
  }


  ngOnInit() {
    return this.apiService.getMovie()
      .subscribe((data: Results)=> {
        console.log(data)
        this.movies= data.results;
      });

/*    return this.apiService.getImages()
      .subscribe((data: Results)=> {
      this.images= data.pictures;
    });*/

  }
}
