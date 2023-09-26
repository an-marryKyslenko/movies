import React from 'react'
import { Form } from 'react-final-form'
import { Box, Button } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GENRES_QUERY } from './queries';
import Genres from './components/Genres';
import IncludeAdult from './components/IncludeAdult';
import translate from '../../utils/translate';
import SortBy from './components/SortBy';
import SortDirection from './components/SortDirection';
import YearField from './components/YearField';

const Filters = ({ onSubmit, initialValues }) => {
	const { loading, error, data } = useQuery(GENRES_QUERY)
	if (loading) {
		return "loading ..."
	}
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
					<Box sx={{ p: 1, display: 'flex', flexDirection: 'column', flex: '1 0 50%' }}>
						<YearField />
						{data && (
							<Genres data={data} />
						)}
						<IncludeAdult />
					</Box>
					<Box sx={{ flex: '0 1 50%', alignSelf: 'flex-end', textAlign: 'right' }}>
						<SortBy />
						<SortDirection />
					</Box>
					<Button sx={{ m: 2 }} variant='contained' type="submit">{translate("filter.button")}</Button>
				</form >
			)}
		/>
	)
}

export default Filters