import { IMovie } from './movie';

export interface IGetPopularMoviesResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}
