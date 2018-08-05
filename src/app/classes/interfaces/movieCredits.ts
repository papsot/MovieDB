export interface IMovieCast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}

export interface IMovieCrew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: string;
}

export interface IMovieCredits {
    id: number;
    cast: IMovieCast[];
    crew: IMovieCrew[];
}

export class MovieCredits implements IMovieCredits {
    id: number;
    cast: IMovieCast[];
    crew: IMovieCrew[];

    constructor() {
        this.id = null;
        this.cast = [];
        this.crew = [];
    }
}

