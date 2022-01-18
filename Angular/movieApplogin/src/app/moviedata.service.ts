import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private _HttpClient:HttpClient ) { }

  imgPath : string = "https://image.tmdb.org/t/p/w500";

  getMovies(movieDype : string) :Observable<any>
  {
   return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${movieDype}/week?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getDetails(movieId : string) :Observable<any>
  {
   return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`);
  }

 



}

