import { Stack, Typography } from '@mui/material';
import React from 'react'
import {
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
	FacebookIcon
} from "react-share";
import translate from '../../utils/translate';

const ShareSocialMedia = ({ url }) => {
	return (
		<>
			<Typography variant="subtitle1" component="h2">
				{translate('share')}
			</Typography>
			<Stack direction="row" spacing={1}>
				<FacebookShareButton url={url}>
					<FacebookIcon round size={32} />
				</FacebookShareButton>
				<TwitterShareButton url={url}>
					<TwitterIcon round size={32} />
				</TwitterShareButton>
			</Stack>
		</>

	)
}

export default ShareSocialMedia