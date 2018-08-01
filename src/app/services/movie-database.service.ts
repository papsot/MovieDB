import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetPopularMoviesResponse } from '../classes/interfaces/popularMoviesResponse';
import { IGetMovieResponse } from '../classes/interfaces/movieResponse';

@Injectable({
    providedIn: 'root'
})
export class MovieDatabaseService {

    constructor(private http: HttpClient) { }

    getPopularMovies() {
        return this.http.get<IGetPopularMoviesResponse>('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fdcd977a12ee20da2fe6ffd425012720');
    }

    getMovie(movieId: number) {
        return this.http.get<IGetMovieResponse>('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=fdcd977a12ee20da2fe6ffd425012720');
    }

    getConfiguration() {
        return this.http.get('https://api.themoviedb.org/3/configuration?api_key=fdcd977a12ee20da2fe6ffd425012720');
    }
}
