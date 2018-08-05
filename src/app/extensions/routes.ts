import { Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';


export const appRoutes: Routes = [
    { path: 'index', component: MovieDetailsComponent },
    { path: 'movies/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', component: MovieDetailsComponent }
];
