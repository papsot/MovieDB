import { Component, OnInit } from '@angular/core';

import { MovieDatabaseService } from '../../services/movie-database.service';
import { IMovie } from '../../classes/interfaces/movie';
import { IGetMovieListResponse, GetMovieListResponse } from '../../classes/interfaces/popularMoviesResponse';

@Component({
    selector: 'sp-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    movieListResponse: GetMovieListResponse = new GetMovieListResponse();

    constructor(private movieDBService: MovieDatabaseService) { }

    ngOnInit() {
        this.movieDBService.getConfiguration().subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }


    getPopularMovies(pageNumber: number) {
        this.movieDBService.getPopularMovies(pageNumber).subscribe(
            response => this.movieListResponse = response,
            error => console.log(error)
        );
    }

    searchMovie(queryString: string) {
        this.movieDBService.searchMovie(queryString).subscribe(
            response => this.movieListResponse = response,
            error => console.log(error)
        );
        // console.log(queryString);
    }




}
