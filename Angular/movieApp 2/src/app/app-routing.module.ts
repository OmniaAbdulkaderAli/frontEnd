import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeapleComponent } from './peaple/peaple.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [

  {path:'' , redirectTo:"home", pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'movie', component : MoviesComponent},
  {path : 'tv', component : TvComponent},
  {path : 'peaple', component : PeapleComponent},
  {path : 'movieDetails/:movieId', component : MovieDetailsComponent},
  
  {path : '**', component : NotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
