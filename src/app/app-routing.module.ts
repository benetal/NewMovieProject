import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewestMoviesComponent} from './components/newest-movies/newest-movies.component';
import {PopularComponent} from './components/popular/popular.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {TopRatedComponent} from './components/top-rated/top-rated.component';


const routes: Routes = [
  {path: '', component: PopularComponent},
  {path: 'newest', component: NewestMoviesComponent},
  {path: 'favourites', component: FavoritesComponent},
  {path: 'topRated', component: TopRatedComponent},

  // {path: '', redirectTo: '/first-component' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
