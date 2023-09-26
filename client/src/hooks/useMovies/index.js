import { useState, useCallback } from "react"

const MAX_SELECTED_MOVIES = 15;

export const useMovies = () => {
	const [selectedMovies, setSelectedMovies] = useState([])

	const selectMovie = useCallback((movie) => {
		const length = selectedMovies.length
		const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id)
		if (isNewMovie && length < MAX_SELECTED_MOVIES) {
			setSelectedMovies([movie, ...selectedMovies])
		}
	}, [selectedMovies]);

	const deleteMovie = useCallback((movie) => {
		const filteredList = selectedMovies.filter(({ id }) => id !== movie.id)
		setSelectedMovies(filteredList)
	}, [selectedMovies]);

	return {
		selectedMovies,
		selectMovie,
		deleteMovie
	}
}