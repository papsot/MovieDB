import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../classes/interfaces/movie';

@Component({
    selector: 'sp-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    @Input() movieList: Array<IMovie>;

    constructor() { }

    ngOnInit() {
    }

}
