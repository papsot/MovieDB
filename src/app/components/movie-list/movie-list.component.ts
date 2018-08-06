import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '../../classes/interfaces/movie';
import { PageEvent } from '../../../../node_modules/@angular/material';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

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

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            response => console.log(response['id']),
            error => console.log(error)
        );
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
