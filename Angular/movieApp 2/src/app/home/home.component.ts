import { Component, OnInit } from '@angular/core';
import {MovieApiService} from '../movie-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeMovies:any;
  homeTv:any;

  imgPath: string = "https://image.tmdb.org/t/p/w500";
  constructor(public _MovieApiService:MovieApiService) { }

  ngOnInit(): void {

    this._MovieApiService.getMovies("movie").subscribe( (data)=>{

      this.homeMovies = data.results.slice(0,10);

    }   )


    this._MovieApiService.getMovies("tv").subscribe( (data)=>{

      this.homeTv = data.results.slice(0,10);

    }   )

  }

}
