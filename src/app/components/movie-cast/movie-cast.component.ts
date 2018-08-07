import { Component, OnInit, Input } from '@angular/core';
import { IMovieCredits, IMovieCast } from '../../classes/interfaces/movieCredits';

@Component({
	selector: 'sp-movie-cast',
	templateUrl: './movie-cast.component.html'
})
export class MovieCastComponent implements OnInit {

	@Input() movieCast: Array<IMovieCast> = new Array<IMovieCast>();

	constructor() { }

	ngOnInit() {
	}

}
