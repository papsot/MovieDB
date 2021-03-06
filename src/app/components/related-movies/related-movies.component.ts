import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '../../classes/interfaces/movie';

@Component({
	selector: 'sp-related-movies',
	templateUrl: './related-movies.component.html',
	styleUrls: ['./related-movies.component.scss']
})
export class RelatedMoviesComponent implements OnInit {

	@Input() relatedMovieList: Array<IMovie> = new Array<IMovie>();

	constructor() { }

	ngOnInit() {
	}

}
