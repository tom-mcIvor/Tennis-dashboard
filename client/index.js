import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app'))
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
