import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // populars: Popular [] = [];
  title: string = 'NewMovieProject';



  // constructor(private apiService: ApiService) {
  // }
  constructor() {
  }


 ngOnInit(): void {
  // return this.apiService.getPopularMovie()
  //   .subscribe((data: Results)=> {
  //     console.log(data)
  //     this.populars= data.results;
  //   });
  }
}
