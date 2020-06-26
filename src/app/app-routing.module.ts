import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopularComponent} from './components/pages/popular/popular.component';
import {FavoritesComponent} from './components/pages/favorites/favorites.component';
import {TopRatedComponent} from './components/pages/top-rated/top-rated.component';
import {NowPlayingMovieComponent} from './components/pages/now-playing-movie/now-playing-movie.component';
import {SearchComponent} from './components/pages/search/search.component';


const routes: Routes = [
  {path: '', component: PopularComponent},
  {path: 'nowPlaying', component: NowPlayingMovieComponent},
  {path: 'favourites', component: FavoritesComponent},
  {path: 'topRated', component: TopRatedComponent},
  {path: 'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
