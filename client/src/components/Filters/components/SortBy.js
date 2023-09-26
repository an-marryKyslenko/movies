import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@mui/material'
import { SORT_OPTIONS } from '../../../const'
import translate from '../../../utils/translate'
import { FormattedMessage } from 'react-intl'
const SortBy = () => {
	return (
		<Field
			name="sortBy"
			render={({ input, meta }) => (
				<>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
						<InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							label="Sort by"
							{...input}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{SORT_OPTIONS.map(({ label, value }) => (
								<MenuItem key={value} value={value}><FormattedMessage id={`filter.sort.${label}`} /></MenuItem>
							))}
						</Select>
					</FormControl>
					{meta.error && meta.touched && <span>{meta.error}</span>}
				</>

			)}
		/>
	)
}

export default SortBy