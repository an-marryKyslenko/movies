import React from 'react'
import PropTypes from 'prop-types';

import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	MenuItem,
} from '@mui/material';
import CardMenu from '../CardMenu';
import translate from '../../utils/translate';


const MovieCard = ({ movie, onCardSelect, isSelectedList }) => {

	return (
		<Card sx={{ maxWidth: 250, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
			{isSelectedList && (
				<CardMenu >
					<MenuItem onClick={() => onCardSelect(movie)}>{translate("add")}</MenuItem>
				</CardMenu>
			)}

			<CardMedia
				component="img"
				height="250"
				image={movie.image}
				alt={movie.title}
			/>
			<CardContent sx={{
				'&:last-child': {
					paddingBottom: 1,
				},
				flex: '1 1 auto'
			}}>
				<Typography variant="h6" sx={{ fontWeight: 500, lineHeight: 1 }} gutterBottom component="div">
					{movie.title}
				</Typography>
				<Typography sx={{ paddingBottom: 0 }} variant="subtitle1" gutterBottom component="div">
					{movie.releaseDate}
				</Typography>
			</CardContent>
		</Card>
	)
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		releaseDate: PropTypes.string
	}).isRequired,
	onCardSelect: PropTypes.func,
	isSelectedList: PropTypes.bool
}
export default MovieCard