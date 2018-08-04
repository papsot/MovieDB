import { IMovie } from './movie';

export interface IGetMovieListResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export class GetMovieListResponse implements IGetMovieListResponse {
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
