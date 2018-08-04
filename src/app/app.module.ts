import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatGridListModule, MatPaginatorModule } from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { MovieDatabaseService } from './services/movie-database.service';

@NgModule({
    declarations: [
        IndexComponent,
        MovieListComponent,
        MovieDetailsComponent,
        LandingPageComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatGridListModule,
        MatPaginatorModule
    ],
    providers: [
        MovieDatabaseService
    ],
    bootstrap: [IndexComponent]
})
export class AppModule { }
