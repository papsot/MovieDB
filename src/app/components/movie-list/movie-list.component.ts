import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../classes/interfaces/movie';
import { MovieDatabaseService } from '../../services/movie-database.service';

@Component({
    selector: 'sp-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    @Input() movieList: Array<IMovie>;

    constructor(private movieDBService: MovieDatabaseService) { }

    ngOnInit() {
    }

    showMovieDetails(id: number) {
        console.log(id);
        this.movieDBService.getMovie(id).subscribe(
            resp => console.log(resp),
            error => console.log(error)
        );
    }

}
