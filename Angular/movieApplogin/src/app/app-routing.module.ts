import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeapleComponent } from './peaple/peaple.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

import {AuthGuard} from './auth.guard'


const routes: Routes = [
  // 4200/home
  {path:"" , redirectTo:"home" , pathMatch:"full"},

  {path : "hr" , loadChildren: () => import('./hr/hr.module').then(m => m.HrModule) },

  {path :"home", canActivate : [AuthGuard] , component:HomeComponent},
  {path :"movie" , canActivate : [AuthGuard], component:MovieComponent},
  {path :"tv" , canActivate : [AuthGuard], component:TvComponent},
  {path :"network", canActivate : [AuthGuard] , component:NetworksComponent},
  {path :"peaple" , canActivate : [AuthGuard], component:PeapleComponent},
  {path :"about", canActivate : [AuthGuard] , component:AboutComponent},
  {path :"register" , component:RegisterComponent},
  {path :"login" , component:LoginComponent},
  
  {path :"showdetails/:id" , canActivate : [AuthGuard], component:MoviedetailsComponent},
  {path :"**" , component:NotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
