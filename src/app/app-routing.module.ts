import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {NewestMoviesComponent} from './components/newest-movies/newest-movies.component';


const routes: Routes = [
  {path: 'first-component', component: AppComponent},
  {path: 'second-component', component: NewestMoviesComponent},
  {path: '', redirectTo: '/first-component' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
