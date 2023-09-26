import axios from "axios";
import { API_KEY, API_BASE_URL } from "../../config/index.js";
import Genre from "./entities/Genre.js";


export const getList = async (language) => {
	const result = await axios.get(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`)
	return result.data.genres.map((genre) => new Genre(genre))
}