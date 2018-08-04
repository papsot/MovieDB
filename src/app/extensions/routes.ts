import { Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';


export const appRoutes: Routes = [
    { path: 'moviedb', component: MovieDetailsComponent },
    { path: 'moviedb/movies/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/moviedb', pathMatch: 'full' },
    { path: '**', component: LandingPageComponent }
];
