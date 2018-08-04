import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { MovieDatabaseService } from '../../services/movie-database.service';
import { MovieExtended } from '../../classes/interfaces/movie';

@Component({
    selector: 'sp-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

    movie: MovieExtended = new MovieExtended();

    constructor(private route: ActivatedRoute, private router: Router, private movieDBService: MovieDatabaseService) { }

    ngOnInit() {
        this.route.params.subscribe(
            // resp => console.log(resp['id']),
            resp => resp['id'] ?  this.getMovie(resp['id']) : false,
            error => console.log(error)
        );
    }

    getMovie(id: number) {
        this.movieDBService.getMovie(id).subscribe(
            resp => this.movie = resp,
            error => console.log(error)
        );
    }

}
