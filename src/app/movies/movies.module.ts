import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { FormsModule } from '@angular/forms';
import { AppHeaderModule } from '../shared/components/app-header/app-header.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppButtonModule } from '../shared/components/app-button/app-button.module';
import { MoviesSearchbarComponent } from './movies-searchbar/movies-searchbar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppStarsRatingModule } from '../shared/components/app-stars-rating/app-stars-rating.module';
import { AppFooterModule } from '../shared/components/app-footer/app-footer.module';
import { AppOffcanvasModule } from '../shared/components/app-offcanvas/app-offcanvas.module';
import { MoviesTitleComponent } from './movies-title/movies-title.component';
import { AppListModule } from '../shared/components/app-list/app-list.module';
import { AppModalModule } from '../shared/components/app-modal/app-modal.module';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MoviesSearchbarComponent,
    MovieDetailsComponent,
    MoviesTitleComponent,
    FavoritesListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    AppHeaderModule,
    AppButtonModule,
    AppStarsRatingModule,
    AppOffcanvasModule,
    AppListModule,
    AppFooterModule,
    AppModalModule
  ]
})
export class MoviesModule { }
