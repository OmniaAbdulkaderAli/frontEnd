import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {MoviedataService} from '../moviedata.service'

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movieID : any = ""
movieDetails : any;
imgPath : string = ""
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviedataService:MoviedataService) { }

  ngOnInit(): void {

    this.imgPath = this._MoviedataService.imgPath;

   this.movieID =   this._ActivatedRoute.snapshot.paramMap.get("id")
  
    this._MoviedataService.getDetails(this.movieID).subscribe( (data)=>{

      this.movieDetails = data;


    } )
  
  
  }

}
