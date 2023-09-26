import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { flatten } from 'flat'
import { LOCALES } from '../../const'
import messages from '../../messages'

const I18Provider = ({ children, locale = LOCALES.ENGLISH }) => {
	return <IntlProvider
		locale={locale}
		textComponent={Fragment}
		messages={flatten(messages[locale])}
	>
		{children}
	</IntlProvider>
}

I18Provider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	locale: PropTypes.oneOf(Object.values(LOCALES))
}


export default I18Provider