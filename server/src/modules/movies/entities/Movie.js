import { IMAGE_BASE_PATH } from "../../../config/index.js";
import { format } from 'date-fns';
import Genre from "../../genres/entities/Genre.js";

function changeDateFormat(date) {
	return date.split('-').reverse().join('.')
}

export default class Movie {
	constructor(movie) {
		this.movie = movie;
		this.id = movie.id;
		this.title = movie.title;
		this.releaseDate = changeDateFormat(movie.release_date);
		this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
		this.adult = movie.adult;
		this.originalLanguage = movie.original_language;
		this.popularity = movie.popularity;
		this.runtime = movie.runtime;

	}
	// releaseDate(params) {
	// 	const date = this.movie.relese_date
	// 	return params.format
	// 	? format(new Date(date), params.format)
	// 	: date
	// }

}

