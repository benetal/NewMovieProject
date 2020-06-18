import { Component, OnInit } from '@angular/core';
import {Results} from '../../model/results';
import {ApiService} from '../../services/api.service';
import {Popular} from '../../model/popular';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  populars: Popular [] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService.getPopularMovie()
      .subscribe((data: Results) => {
        console.log(data)
        this.populars = data.results;
      });
  }

}
