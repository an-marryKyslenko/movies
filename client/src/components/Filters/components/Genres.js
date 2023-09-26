import React from 'react'
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@mui/material'
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl'
import translate from '../../../utils/translate';

const Genres = ({ data }) => {
	return (
		<Field
			name="genre"
			render={({ input, meta }) => (
				<>
					<Field
						name="genre"
						render={({ input }) => (

							<FormControl sx={{ m: 1, minWidth: 120 }}>
								<InputLabel id="demo-simple-select-label">{translate('filter.genre')}</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									autoWidth
									label={translate('filter.genre')}
									{...input}
								>
									{data?.genres.map(({ name, id }) => (
										<MenuItem key={id} value={id}>
											{name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						)}
					/>
					{meta.error && meta.touched && <span>{meta.error}</span>}

				</>

			)}

		/>

	)
}

export default Genres