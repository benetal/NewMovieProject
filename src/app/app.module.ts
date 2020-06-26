import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { HeaderComponent } from './components/navigation-bar/header/header.component';
import { FooterComponent } from './components/navigation-bar/footer/footer.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { TopRatedComponent } from './components/pages/top-rated/top-rated.component';
import {NowPlayingMovieComponent} from './components/pages/now-playing-movie/now-playing-movie.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/pages/search/search.component';
import { TitleFilterPipe } from './pipes/title-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HeaderComponent,
    FooterComponent,
    PopularComponent,
    TopRatedComponent,
    NowPlayingMovieComponent,
    SearchComponent,
    TitleFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
