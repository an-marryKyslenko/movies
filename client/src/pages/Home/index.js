import React, { useState } from 'react'
import { Grid, Box, Paper } from '@mui/material';
import { MovieCard } from '../../components';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies';
import SelectedMoviesSection from '../../components/SelectedMoviesSection';
import PaginationSection from '../../components/PaginationSection';
import Filters from '../../components/Filters';
import { useFilters } from '../../hooks/useFilter'

const Home = () => {
	const { filter, setFilters, setPage } = useFilters()
	const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { filter } })
	const { selectedMovies, selectMovie, deleteMovie } = useMovies()
	const handleChangePage = (e, value) => {
		setPage(value)
	}

	if (error) {
		throw error
	}

	const onSubmit = (data) => {
		console.log(data);

		debugger;
		setFilters(data)
	}
	return (
		<Box sx={{ flexGrow: 1, marginTop: 2 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Paper>
						<Filters onSubmit={onSubmit} initialValue={filter} />
					</Paper>
				</Grid>
				<Grid item xs={12} md={8}>
					<Paper>
						<Box sx={{ flexGrow: 1, padding: 1 }}>
							{loading && 'Loading...'}
							{data && (
								<Grid container spacing={2}>
									{data.movies.results.map((movie) => (
										<Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
											<MovieCard movie={movie} onCardSelect={selectMovie} isSelectedList={true} />
										</Grid>
									))}
								</Grid>
							)}
						</Box>
					</Paper>
				</Grid>
				<SelectedMoviesSection selectedMovies={selectedMovies} deleteMovie={deleteMovie} />
				<Grid item xs={12}>
					<PaginationSection handleChangePage={handleChangePage} page={filter.page} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Home