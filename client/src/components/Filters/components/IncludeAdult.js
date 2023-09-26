import React from 'react'
import { Field } from 'react-final-form'
import {
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import translate from '../../../utils/translate';
const IncludeAdult = () => {
	return (
		<Field
			name="includeAdult"
			type='checkbox'
			render={({ input, meta }) => (
				<>
					<FormControlLabel
						control={<Checkbox {...input} />}
						label={translate('filter.includeAdult')}
						sx={{ marginLeft: 1 }}
					>
					</FormControlLabel>
					{meta.error && meta.touched && <span>{meta.error}</span>}
				</>

			)}
		/>
	)
}

export default IncludeAdult