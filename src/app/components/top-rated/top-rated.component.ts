import { Component, OnInit } from '@angular/core';
import {GetTopRated} from '../../model/getTopRated';
import {ApiService} from '../../services/api.service';
import {GetTopRatedInterface} from '../../model/getTopRatedInterface';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRated: GetTopRated [] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService.getTopRated()
      .subscribe((data: GetTopRatedInterface) => {
        // console.log(data);
        this.topRated  = data.results;
      });
  }
}
