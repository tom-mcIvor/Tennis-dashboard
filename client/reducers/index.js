import { combineReducers } from 'redux'

import errorMessage from './errorMessage'

import tennis from './tennis'

export default combineReducers({
  errorMessage,
  tennis,
})
