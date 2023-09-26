import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../../config/index.js';
import Movies from './entities/Movies.js';

export const getPopular = async (filter, language) => {
	const result = await axios.get(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&sort_by=${filter.sortBy}.${filter.sortDirection}&year=${filter.year}&include_adult=${filter.includeAdult}&with_genres=${filter.genre}`)

	return new Movies(result.data)
}

export const getDetails = async (id, language) => {
	return axios.get(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`)
}
