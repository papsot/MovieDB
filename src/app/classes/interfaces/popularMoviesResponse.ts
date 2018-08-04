import { IMovie } from './movie';

export interface IGetPopularMoviesResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export class PopularMoviesResponse implements IGetPopularMoviesResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;

    constructor() {
        this.page = null;
        this.results = [];
        this.total_pages = null;
        this.total_results = null;
    }
}
