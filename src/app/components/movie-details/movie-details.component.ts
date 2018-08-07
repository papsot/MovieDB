import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { MovieDatabaseService } from '../../services/movie-database.service';
import { MovieExtended, IMovie } from '../../classes/interfaces/movie';

import * as _ from 'lodash';
import { MovieCredits, IMovieCast } from '../../classes/interfaces/movieCredits';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
	selector: 'sp-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

	movie: MovieExtended;
	relatedMovies: Array<IMovie> = new Array<IMovie>();
	movieCast: Array<IMovieCast> = new Array<IMovieCast>();

	constructor(private route: ActivatedRoute, private router: Router, private movieDBService: MovieDatabaseService, public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.route.params.subscribe(
			response => response['id'] ? this.getMovie(response['id']) : false,
			error => this.handleError()
		);
	}

	getMovie(id: number) {
		this.movieDBService.getMovie(id).subscribe(
			response => {
				this.movie = response;
				this.getRelatedMovies(this.movie.id);
				this.getCast(this.movie.id);
			},
			error => this.handleError()
		);
	}

	getRelatedMovies(movieId: number) {
		this.movieDBService.getRelatedMovies(movieId).subscribe(
			response => this.relatedMovies = _.sampleSize(response.results, 6),
			error => this.handleError()
		);
	}

	getCast(movieId: number) {
		this.movieDBService.getMovieCredits(movieId).subscribe(
			response => this.movieCast = _.sortBy(response.cast, ['order']).slice(0, 6), // just to be sure of the order
			error => this.handleError()
		);
	}

	handleError() {
		this.snackBar.open('Woops! Something went wrong!');
	}
}
