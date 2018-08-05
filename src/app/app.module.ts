import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
} from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { MovieDatabaseService } from './services/movie-database.service';
import { RelatedMoviesComponent } from './components/related-movies/related-movies.component';
import { MovieCastComponent } from './components/movie-cast/movie-cast.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';

@NgModule({
    declarations: [
        IndexComponent,
        MovieListComponent,
        MovieDetailsComponent,
        LandingPageComponent,
        RelatedMoviesComponent,
        MovieCastComponent,
        MovieRatingComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatGridListModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [
        MovieDatabaseService
    ],
    bootstrap: [IndexComponent]
})
export class AppModule { }
