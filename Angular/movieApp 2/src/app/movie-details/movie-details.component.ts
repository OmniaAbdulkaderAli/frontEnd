import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  selectemovieId : any=""

  constructor(private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.selectemovieId =  this._ActivatedRoute.snapshot.paramMap.get("movieId");
  }

}
