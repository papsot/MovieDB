import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { MovieDatabaseService } from '../../services/movie-database.service';
import { MovieExtended, IMovie } from '../../classes/interfaces/movie';

import * as _ from 'lodash';
import { MovieCredits, IMovieCast } from '../../classes/interfaces/movieCredits';

@Component({
    selector: 'sp-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

    // movie: MovieExtended = new MovieExtended();
    movie: MovieExtended;
    relatedMovies: Array<IMovie> = new Array<IMovie>();
    movieCast: Array<IMovieCast> = new Array<IMovieCast>();

    constructor(private route: ActivatedRoute, private router: Router, private movieDBService: MovieDatabaseService) { }

    ngOnInit() {
        this.route.params.subscribe(
            response => response['id'] ?  this.getMovie(response['id']) : false,
            error => console.log(error)
        );
    }

    getMovie(id: number) {
        this.movieDBService.getMovie(id).subscribe(
            response => {
                this.movie = response;
                this.getRelatedMovies(this.movie.id);
                this.getCast(this.movie.id);
            },
            error => console.log(error)
        );
    }

    getRelatedMovies(movieId: number) {
        this.movieDBService.getRelatedMovies(movieId).subscribe(
            response => this.relatedMovies = _.sampleSize(response.results, 6),
            error => console.log(error)
        );
    }

    getCast(movieId: number) {
        this.movieDBService.getMovieCredits(movieId).subscribe(
            response => this.movieCast = _.sortBy(response.cast, ['order']).slice(0, 6), // just to be sure of the order
            error => console.log(error)
        );
    }
}
