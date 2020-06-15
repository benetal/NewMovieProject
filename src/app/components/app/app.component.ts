import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Popular} from '../../model/popular';
import {Results} from '../../model/results';

import {Title} from '@angular/platform-browser';
import {Newest} from '../../model/newest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // populars: Popular []=[];
  // title: Function;



  constructor(private apiService: ApiService) {
  }


    ngOnInit(): void {
    }

  // ngOnInit() {
  //   return this.apiService.getPopularMovie()
  //     .subscribe((data: Results)=> {
  //       console.log(data)
  //       this.populars= data.popularMovies;
  //     });
  // }
}
