import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { PeapleComponent } from './peaple/peaple.component';
import { TvComponent } from './tv/tv.component';
import { NetworksComponent } from './networks/networks.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import { RealSearchPipe } from './real-search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    PeapleComponent,
    TvComponent,
    NetworksComponent,
    AboutComponent,
    NotfoundComponent,
    MoviedetailsComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    RealSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , HttpClientModule , ReactiveFormsModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
