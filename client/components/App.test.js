import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

//@testing-library/react not working because the lastest version of react wasnt in the dev dependancies (didnt have the lastest version of react)

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