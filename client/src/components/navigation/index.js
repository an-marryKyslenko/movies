import React, { useContext, useState, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
	Box,
	AppBar,
	Drawer,
	Toolbar,
	IconButton,
	Typography,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Hidden,
	Link
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppContext } from '../../providers/appContext';
import { LOCALES } from '../../const';
import translate from '../../utils/translate';

function Navigation() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const { state, dispatch } = useContext(AppContext)

	const setLanguage = useCallback((locale) => {
		dispatch({
			type: 'setLocale',
			locale
		})
	}, [])

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
		>
			<List>
				<ListItem
					to="settings"
					component={RouterLink}
					disablePadding
					style={{ color: "rgba(0, 0, 0, 0.54)" }}
				>
					<ListItemButton>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
	return (

		<Box>
			<AppBar position="static" >
				<Toolbar>
					<Hidden only={['lg', 'xl']}>
						<IconButton
							onClick={() => setIsDrawerOpen(true)}
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
						<Typography style={{ color: 'white' }} variant="h6" component="div">
							{translate('navigation.recommendation')}
						</Typography>
					</Link>
					<Box>
						<Button
							sx={{ my: 2, color: 'white' }}
							onClick={() => setLanguage(LOCALES.ENGLISH)}
							disabled={state.locale === LOCALES.ENGLISH}
						>
							English
						</Button>
						<Button
							sx={{ my: 2, color: 'white' }}
							onClick={() => setLanguage(LOCALES.UKRAINE)}
							disabled={state.locale === LOCALES.UKRAINE}
						>
							Українська
						</Button>
					</Box>
					<Box sx={{ display: 'block' }}>
						<Button
							component={RouterLink}
							to="/"
							sx={{ color: '#fff' }}
						>
							{translate('navigation.settings')}
						</Button>
					</Box>
					<Button color="inherit">{translate('navigation.log')}</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClick={() => setIsDrawerOpen(false)}
			>
				{list()}
			</Drawer>
		</Box>

	);
}

export default Navigation;
