import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { MovieDatabaseService } from '../../services/movie-database.service';
import { GetMovieListResponse } from '../../classes/interfaces/popularMoviesResponse';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
	selector: 'sp-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	private inThrottle = false;
	movieListResponse: GetMovieListResponse = new GetMovieListResponse();
	popularMoviesShown: boolean = false;
	searchInput: string = '';

	constructor(private movieDBService: MovieDatabaseService, private router: Router, public snackBar: MatSnackBar) { }

	ngOnInit() {}

	getPopularMovies(pageNumber: number) {
		this.movieDBService.getPopularMovies(pageNumber).subscribe(
			response => {
				this.movieListResponse = response;
				this.popularMoviesShown = true;
			},
			error => this.handleError()
		);
	}

	searchMovie(queryString: string, page?: number) {
		this.movieDBService.searchMovie(queryString, page).subscribe(
			response => {
				this.movieListResponse = response;
				this.popularMoviesShown = false;
			},
			error => this.handleError()
		);
	}

	getPage(pageNumber: number) {
		this.popularMoviesShown ? this.getPopularMovies(pageNumber) : this.searchMovie(this.searchInput, pageNumber);
	}

	goToIndex() {
		this.movieListResponse = new GetMovieListResponse();
		this.router.navigateByUrl('/index');
	}

	searchMoviesThrottled() {
		if (!this.inThrottle) {
			this.inThrottle = true;
			this.searchMovie(this.searchInput);
			setTimeout(() => {
				this.inThrottle = false;
			}, 200);
		}
	}

	handleError() {
		this.snackBar.open('Woops! Something went wrong!');
	}

}
