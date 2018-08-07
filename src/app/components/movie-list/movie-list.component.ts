import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { IMovie } from '../../classes/interfaces/movie';
import { PageEvent, MatPaginator } from '../../../../node_modules/@angular/material';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
	selector: 'sp-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
	private paginator: MatPaginator;

	@Input() movieList: Array<IMovie>;
	@Input() resultCount: number;
	@Input() popularMoviesShown: boolean;
	@Output() movieSelected: EventEmitter<number> = new EventEmitter<number>();
	@Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
	@ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
		this.paginator = mp;
	}

	constructor() { }

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['resultCount']) {
			changes['resultCount'].currentValue > 100 ? this.resultCount = 100 : true;
		}

		if (changes['popularMoviesShown'] && !changes['popularMoviesShown'].firstChange) {
			this.paginator.firstPage();
		}
	}

	showMovieDetails(id: number) {
		this.movieSelected.emit(id);
	}

	changePage(event: PageEvent) {
		this.pageChanged.emit(event.pageIndex + 1);
	}

}
