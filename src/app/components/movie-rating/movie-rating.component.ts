import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sp-movie-rating',
    templateUrl: './movie-rating.component.html',
    styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit, OnChanges {

    @Input() rating: number = null;

    ratingArray: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    constructor() { }

    ngOnInit() {
        this.populateRatingArray(this.rating);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.populateRatingArray(this.rating);
    }

    populateRatingArray(rating: number) {

        if (!rating) {
            this.ratingArray = new Array<number>(10);
        } else {
            this.ratingArray.length = 0;

            const integerRating = Math.floor(rating);
            const decimalRemainder = rating % 1;

            for (let i = 0; i < integerRating; i++) {
                this.ratingArray.unshift(1);
            }

            decimalRemainder ? this.ratingArray.push(this.calculateDecimalRange(decimalRemainder)) : false;

            for (let i = this.ratingArray.length; i < 10; i++) {
                this.ratingArray.push(0);
            }
        }
    }

    calculateDecimalRange(decimalRemainder: number): number {
        switch (true) {
            case (decimalRemainder > 0.25 && decimalRemainder < 0.75):
                return 0.5;
            case (decimalRemainder <= 0.25):
                return 0;
            case (decimalRemainder >= 0.75):
                return 1;
            default:
                return 0;
        }
    }

}
