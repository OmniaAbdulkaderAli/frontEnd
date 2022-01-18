import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

import {Router} from '@angular/router'

import {FormGroup , FormControl , Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errors : string =""

  registerForm : FormGroup = new FormGroup({

    first_name : new FormControl(null , [Validators.required , Validators.minLength(2)]) ,
    last_name : new FormControl(null, [Validators.required , Validators.minLength(2)]) ,
    age : new FormControl(null, [Validators.required , Validators.min(20) , Validators.max(40)]) ,
    email : new FormControl(null , [Validators.required , Validators.email]) ,
    password : new FormControl(null, [Validators.required , Validators.pattern('^[A-Z][0-9]+$')  ])
  })

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }

  register(registerForm :FormGroup )
  {
    
    this._AuthService.register(registerForm.value).subscribe( (data)=>{


      if(  data.message == "success" )
      {
          //----> login
          this._Router.navigate(['login'])
      }
      else
      {
         this.errors =  data.errors.email.message
      }


    } )
    
  }

}
