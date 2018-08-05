import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRatingComponent } from './movie-rating.component';

describe('MovieRatingComponent', () => {
    let component: MovieRatingComponent;
    let fixture: ComponentFixture<MovieRatingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovieRatingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieRatingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should return 0.5 when value is between .25 and .75', () => {
        const comp = new MovieRatingComponent();
        expect(comp.populateRatingArray(0.6)).toBe(0.5);
    });
});
