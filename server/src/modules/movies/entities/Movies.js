import Movie from "./Movie.js";

export default class Movies {
	constructor(movies) {
		this.page = movies.page;
		this.totalPages = movies.total_pages;
		this.totalResults = movies.total_results;
		this.results = movies.results.map(
			(movie) => new Movie(movie))
	}
}


