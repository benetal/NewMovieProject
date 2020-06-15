import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NewestMoviesComponent } from './components/newest-movies/newest-movies.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'favourites', component: FavoritesComponent},
  {path: 'newest', component: NewestMoviesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NewestMoviesComponent,
    FavoritesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
