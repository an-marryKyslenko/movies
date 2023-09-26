import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { Grid, Box, Paper,Typography } from '@mui/material';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { MovieCard} from '../../components';

const Recommend = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get('title')
	const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
		variables: {
			ids: searchParams.get('ids').split(',').map((id) => +id)
		}
	})
	if (loading) {
		return <div>Loading ...</div>
	}
	if (error) {
		<div>Error.Try again!</div>
	}

	return (
		<>
			<Typography variant='h1' component='h1' gutterBottom>
				{title}
			</Typography>
			<Paper>
				<Box sx={{ flexGrow: 1, padding: 1 }}>
					{loading && 'Loading...'}
					{data && (
						<Grid container spacing={2}>
							{data.moviesByIds.map((movie) => (
								<Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
									<MovieCard movie={movie} />
								</Grid>
							))}
						</Grid>
					)}
				</Box>
			</Paper>
		</>
	)
}

export default Recommend