export interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	iso_639_1: string;
	name: string;
}

export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface IMovieExtended extends IMovie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export class MovieExtended implements IMovieExtended {
	genre_ids: number[];
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;

	constructor() {
		this.genre_ids = [];
		this.adult = null;
		this.backdrop_path = null;
		this.belongs_to_collection = null;
		this.budget = null;
		this.genres = [];
		this.homepage = null;
		this.id = null;
		this.imdb_id = null;
		this.original_language = null;
		this.original_title = null;
		this.overview = null;
		this.popularity = null;
		this.poster_path = null;
		this.production_companies = [];
		this.production_countries = [];
		this.release_date = null;
		this.revenue = null;
		this.runtime = null;
		this.spoken_languages = [];
		this.status = null;
		this.tagline = null;
		this.title = null;
		this.video = null;
		this.vote_average = null;
		this.vote_count = null;
	}
}
