import { Component, OnInit } from '@angular/core';

import {MoviedataService} from '../moviedata.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeMovies : any;
  homeTv : any;

  term : string = ""
  

  constructor(private _MoviedataService:MoviedataService) { 
  
  }
  imgPath:string = "";

  ngOnInit(): void {

    this.imgPath  = this._MoviedataService.imgPath;

    this._MoviedataService.getMovies("movie").subscribe(  (data)=>{

      this.homeMovies = data.results.slice(0,10)


    } )


    this._MoviedataService.getMovies("tv").subscribe(  (data)=>{

      this.homeTv = data.results.slice(0,10)


    } )

  }

}


// ngInit
// ngChange
// ngDestroy

