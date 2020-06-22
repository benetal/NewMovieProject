import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {GetNowPlayingInterface} from '../../model/getNowPlayingInterface';
import {GetNowPlaying} from '../../model/getNowPlaying';

@Component({
  selector: 'app-now-playing-movie',
  templateUrl: './now-playing-movie.component.html',
  styleUrls: ['./now-playing-movie.component.css']
})
export class NowPlayingMovieComponent implements OnInit {
  nowPlayingMovies: GetNowPlaying[] = [];
  searchName: string="";


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService.getNowPlayingMovieData()
      .subscribe((data: GetNowPlayingInterface) => {
        console.log(data)
        this.nowPlayingMovies = data.results;
      });
  }

}
