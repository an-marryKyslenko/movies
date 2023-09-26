import React from 'react'
import PropTypes from 'prop-types';
import {
	Typography,
	Box,
	Card,
	CardContent,
	CardMedia,
	MenuItem
} from '@mui/material';
import CardMenu from '../CardMenu';
import translate from '../../utils/translate';

const MovieCardSelected = ({ movie, onCardDelete }) => {
	return (
		<Card sx={{ display: 'flex', position: 'relative', margin: "10px 0" }}>
			<CardMedia
				component="img"
				sx={{ width: 100 }}
				image={movie.image}
				alt={movie.title}
			/>
			<CardMenu >
				<MenuItem onClick={() => onCardDelete(movie)} >
					{translate('delete')}
				</MenuItem>
			</CardMenu>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto', p: 1 }}>
					<Typography component="div" variant="h6">
						{movie.title}
					</Typography>
					<Typography variant="subtitle2" color="text.secondary" component="div">
						{movie.releaseDate}
					</Typography>
				</CardContent>
				<Box sx={{ alignItems: 'center', p: 1 }}>
					{movie.genres?.length ? (
						<Typography variant="subtitle2" color="text.secondary" component="div">
							{movie.genres[0].name}
						</Typography>
					) : null}
					<Typography variant="subtitle2" color="text.secondary" component="div">
						{translate('length', { length: movie.runtime ? movie.runtime : '123' })}
					</Typography>
				</Box>
			</Box>

		</Card>
	)
}
MovieCardSelected.propTypes = {
	movie: PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		releaseDate: PropTypes.string,
		genres: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string
		})),
		runtime: PropTypes.number
	}).isRequired,
	onCardDelete: PropTypes.func
}
export default MovieCardSelected