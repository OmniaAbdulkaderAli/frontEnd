import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable , BehaviorSubject } from 'rxjs';

import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken : any =new BehaviorSubject(null); 

  

  constructor(private _HttpClient:HttpClient) {

   if( localStorage.getItem("userToken") != null )
   { 
    this.saveToken() 
   }


   }

  register(registerData :any) :Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup` ,registerData )
  }

  login(loginData :any) :Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin` ,loginData )
  }


  // login
  saveToken()
  {

    this.userToken.next(  jwtDecode(  JSON.stringify(  localStorage.getItem("userToken") )     )          )

  }



}
