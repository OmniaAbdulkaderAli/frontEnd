import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

import {Router} from '@angular/router'

import {FormGroup , FormControl , Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors : string =""

  loginForm : FormGroup = new FormGroup({

     email : new FormControl(null , [Validators.required , Validators.email]) ,
    password : new FormControl(null, [Validators.required , Validators.pattern('^[A-Z][0-9]+$')  ])
  })

  constructor(private _AuthService:AuthService , private _Router:Router) { }


  ngOnInit(): void {

    if( localStorage.getItem("userToken") != null )
    {
      this._Router.navigate(['home'])
    }

  }


  login(loginForm :FormGroup )
  {

    this._AuthService.login(loginForm.value).subscribe( (data)=>{

      if( data.message == "success" )
      {
        //1
        localStorage.setItem("userToken" , data.token);
        //2- service
        this._AuthService.saveToken()
        //3
        this._Router.navigate(['home']);
      }
      else
      {
        this.errors = data.message;
      }

    } )
    
  }

}
