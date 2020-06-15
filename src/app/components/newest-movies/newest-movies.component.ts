import { Component, OnInit } from '@angular/core';
import {Newest} from '../../model/newest';
import {Results} from '../../model/results';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-newest-movies',
  templateUrl: './newest-movies.component.html',
  styleUrls: ['./newest-movies.component.css']
})
export class NewestMoviesComponent implements OnInit {


  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

    /*    return  this.apiService.getNewestMovie()
          .subscribe((data: Newest )=> {
            console.log(data)
            this.newestMovie= data.newest;
          })
      }*/

  }

}
