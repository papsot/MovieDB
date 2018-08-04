import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '../../classes/interfaces/movie';
import { PageEvent } from '../../../../node_modules/@angular/material';

@Component({
    selector: 'sp-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {

    @Input() movieList: Array<IMovie>;
    @Input() resultCount: number;
    @Output() movieSelected: EventEmitter<number> = new EventEmitter<number>();
    @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(change: SimpleChanges) {
        change['resultCount'].currentValue > 100 ? this.resultCount = 100 : true;
    }

    showMovieDetails(id: number) {
        this.movieSelected.emit(id);
    }

    changePage(event: PageEvent) {
        this.pageChanged.emit(event.pageIndex + 1);
    }

}
