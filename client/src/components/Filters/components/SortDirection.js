import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SORT_DIRECTION } from '../../../const';
import { Field } from 'react-final-form';
import translate from '../../../utils/translate';

const SortDirection = () => {
	return (
		<Field
			name='sortDirection'
			render={({ input }) => (
				<FormControl>
					<FormLabel id="demo-radio-buttons-group-label">{translate("filter.sortDirection")}</FormLabel>
					<RadioGroup
						name="sort_direction"
						{...input}

					>
						<FormControlLabel value={SORT_DIRECTION.ASC} control={<Radio />} label="Asc" />
						<FormControlLabel value={SORT_DIRECTION.DESC} control={<Radio />} label="Desc" />
					</RadioGroup>
				</FormControl>
			)}
		/>

	)
}

export default SortDirection