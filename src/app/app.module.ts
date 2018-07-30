import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
    declarations: [
        IndexComponent,
        MovieListComponent,
        MovieDetailsComponent,
    ],
    imports: [
        BrowserModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [IndexComponent]
})
export class AppModule { }
