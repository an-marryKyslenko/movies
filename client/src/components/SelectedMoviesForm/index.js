import React, { useState } from 'react'
import {
	Stack,
	TextField,
	Button,
	Paper,
	Typography
} from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Form, Field } from 'react-final-form'
import translate from '../../utils/translate';

const SelectedMoviesForm = ({ onSubmit }) => {
	const [listName, setListName] = useState('')
	const handleListName = (e, value) => {
		setListName(e.target.value)
	}
	return (
		<Form
			onSubmit={onSubmit}
			validate={values => {
				const errors = {}
				if (!values.listName) {
					errors.listName = 'Required'
				}
				return errors
			}}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Paper
						elevation={3}
						sx={{
							padding: "15px 8px",
							alignSelf: "flex-end",
							position: 'absolute',
							bottom: 0,
							left: 0,
							backgroundColor: 'white',
						}}
					>
						<Stack
							direction="row"
							spacing={1}
						>
							<Field
								name="listName"
								render={({ input, meta }) => (
									<>
										<TextField
											fullWidth
											label={translate('addList')}
											margin='dense'
											id="fullWidth"
											value={listName}
											onChange={handleListName}
											{...input}
										/>
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</>

								)}
							/>
							<Button type='submit' variant='contained' aria-label="delete" >
								<PlaylistAddCheckIcon fontSize='large' />
							</Button>
						</Stack>
					</Paper>

				</form>

			)}
		/>
	)
}

export default SelectedMoviesForm