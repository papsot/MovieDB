import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetMovieListResponse } from '../classes/interfaces/popularMoviesResponse';
import { IMovieExtended } from '../classes/interfaces/movie';
import { IMovieCredits } from '../classes/interfaces/movieCredits';

@Injectable({
    providedIn: 'root'
})
export class MovieDatabaseService {

    private API_KEY: string = 'fdcd977a12ee20da2fe6ffd425012720';

    constructor(private http: HttpClient) { }

    getPopularMovies(pageNumber: number) {
        return this.http.get<IGetMovieListResponse>(
            'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=' + pageNumber + '&api_key=' + this.API_KEY
        );
    }

    getMovie(movieId: number) {
        return this.http.get<IMovieExtended>('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this.API_KEY);
    }

    getConfiguration() {
        return this.http.get('https://api.themoviedb.org/3/configuration?api_key=' + this.API_KEY);
    }

    searchMovie(queryString: string) {
        return this.http.get<IGetMovieListResponse>('https://api.themoviedb.org/3/search/movie?api_key=' + this.API_KEY + '&query=' + queryString );
    }

    getRelatedMovies(movieId: number) {
        return this.http.get<IGetMovieListResponse>('https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=' + this.API_KEY);
    }

    getMovieCredits(movieId: number) {
        return this.http.get<IMovieCredits>('https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=' + this.API_KEY);
    }
}
