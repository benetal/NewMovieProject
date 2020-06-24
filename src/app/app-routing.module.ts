import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopularComponent} from './components/popular/popular.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {TopRatedComponent} from './components/top-rated/top-rated.component';
import {NowPlayingMovieComponent} from './components/now-playing-movie/now-playing-movie.component';
import {SearchComponent} from './components/search/search.component';


const routes: Routes = [
  {path: '', component: PopularComponent},
  {path: 'nowPlaying', component: NowPlayingMovieComponent},
  {path: 'favourites', component: FavoritesComponent},
  {path: 'topRated', component: TopRatedComponent},
  {path: 'search', component: SearchComponent}

  // {path: '', redirectTo: '/first-component' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
