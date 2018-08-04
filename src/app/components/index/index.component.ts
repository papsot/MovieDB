import { Component, OnInit } from '@angular/core';

import { MovieDatabaseService } from '../../services/movie-database.service';
import { IMovie } from '../../classes/interfaces/movie';
import { IGetPopularMoviesResponse, PopularMoviesResponse } from '../../classes/interfaces/popularMoviesResponse';

@Component({
    selector: 'sp-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    popularMoviesResponse: PopularMoviesResponse = new PopularMoviesResponse();

    constructor(private movieDBService: MovieDatabaseService) { }

    ngOnInit() {
        this.movieDBService.getConfiguration().subscribe(
            response => console.log(response),
            error => console.log(error)
        );

        this.getPopularMovies(1);
    }


    getPopularMovies(pageNumber: number) {
        this.movieDBService.getPopularMovies(pageNumber).subscribe(
            response => this.popularMoviesResponse = response,
            error => console.log(error)
        );
    }




}
