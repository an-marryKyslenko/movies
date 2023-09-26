import React from 'react';
import {FormattedMessage} from 'react-intl'

const translate = (id,value)=> <FormattedMessage values={{...value}} id={id}/>

export default translate
