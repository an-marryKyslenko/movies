import React, { useState, useEffect } from 'react';
import {
	Box,
	Typography,
	Paper,
	InputBase,
	Divider,
	IconButton,
	Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from '@mui/material/Modal';
import { PropTypes } from 'prop-types';
import ShareSocialMedia from '../ShareSocialMedia';
import translate from '../../utils/translate';
import { CONFRIM_TIMEOUT } from '../../const';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: '10px'

};

const ConfirmModal = ({ open, onClose, url, title }) => {
	const [openAlert, setOpenAlert] = useState(false)

	useEffect(() => {
		let timer;
		if (openAlert) {
			timer = setTimeout(() => { setOpenAlert(false) }, CONFRIM_TIMEOUT)
		}

		return () => clearTimeout(timer)
	}, [openAlert])

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{title}
				</Typography>
				<Paper
					component="form"
					sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', m: '15px 0' }}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="List URL"
						value={url}
						inputProps={{ 'aria-label': 'search google maps' }}
					/>
					<IconButton href={url} target="_blank" sx={{ p: '10px' }} aria-label="search">
						<VisibilityIcon />
					</IconButton>
					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
					<CopyToClipboard text={url}
						onCopy={() => setOpenAlert(true)}>
						<IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
							<ContentCopyIcon />
						</IconButton>
					</CopyToClipboard>
				</Paper>
				<ShareSocialMedia url={url} />
				{openAlert && (
					<Alert
						action={
							<IconButton onClick={() => setOpenAlert(false)} color="inherit" size="small">
								<CloseIcon fontSize="inherit " />
							</IconButton>
						}
						severity="success"
					>
						{translate('copy')}
					</Alert>

				)}
			</Box>
		</Modal>
	);
}
ConfirmModal.propType = {
	open: PropTypes.bool,
	url: PropTypes.string,
	title: PropTypes.string,
	onClose: PropTypes.func
}
export default ConfirmModal