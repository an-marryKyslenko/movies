import React from 'react'
import { Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import TextField from '@mui/material/TextField';

const YearField = () => {
	return (
		<Field
			name="year"
			render={({ input }) => (
				<TextField id="outlined-basic"
					label={<FormattedMessage id="filter.year"></FormattedMessage>}
					variant="outlined"
					type="number"
					minvalue={1800}
					maxvalue={2030}
					{...input} />
			)}
		/>
	)
}

export default YearField