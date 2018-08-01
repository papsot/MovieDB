import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

import { MovieDatabaseService } from './services/movie-database.service';

@NgModule({
    declarations: [
        IndexComponent,
        MovieListComponent,
        MovieDetailsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule
    ],
    providers: [
        MovieDatabaseService
    ],
    bootstrap: [IndexComponent]
})
export class AppModule { }
