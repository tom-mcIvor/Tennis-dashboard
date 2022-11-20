import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import store from 

import App from './App'
// import store from '../'
import { fetchPlayer } from '../actions'

jest.mock('../actions')

fetchPlayer.mockImplementation(() => () => {})

test('page header includes Ginew', () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>
  )
  const heading = screen.getAllByRole('heading')
  expect(heading[0].innerHTML).toContain('Hello')
})

test('dispatches fetchPlayer action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchPlayer).toHaveBeenCalled()
})