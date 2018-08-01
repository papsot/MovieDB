import { Component, OnInit } from '@angular/core';
import { MovieDatabaseService } from '../../services/movie-database.service';
import { IMovie } from '../../classes/interfaces/movie';

@Component({
    selector: 'sp-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    movieList: Array<IMovie> = new Array<IMovie>();

    constructor(private movieDBService: MovieDatabaseService) { }

    ngOnInit() {

        this.movieDBService.getConfiguration().subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );


        this.movieDBService.getPopularMovies().subscribe(
            response => {
                console.log(response);
                this.movieList = response.results;
                console.log(this.movieList);
            },
            error => {
                console.log(error);
            }
        );

    }

}
