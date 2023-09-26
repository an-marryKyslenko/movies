import React, { useState } from 'react'
import {
	IconButton,
	Menu,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardMenu = ({ children }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<IconButton
				sx={{
					position: "absolute",
					right: 0,
					padding: '5px',
					backgroundColor: 'white',
					opacity: 0.4,
					margin: '5px'
				}}
				aria-label='more'
				id='long-botton'
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				// anchorEl={anchorEl}
				open={open}
				onClick={handleClose}
				anchorEl={anchorEl}
				PaperProps={{
					style: {
						// position: 'absolute',
						width: '20ch',
					},
				}}
			>
				{children}
			</Menu>
		</>
	)
}

export default CardMenu