// import React from 'react'
// import { Provider } from 'react-redux'
// import { screen, render } from '@testing-library/react'
// import { store } from '../'

// import App from './App'
// import { fetchPlayer } from '../actions'


import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { store } from '../'

import { fetchTennisPlayer } from '../apis/tennis.js'

import { fetchPlayer } from '../actions'
import Tennis from './Tennis'
// import { useAutocomplete } from '@mui/material'

jest.mock('../actions')

jest.mock('../apis/tennis')

// import { fetchTennisPlayer } from '../apis/tennis'

fetchPlayer.mockImplementation(() => () => {})

fetchTennisPlayer.mockImplementation(() => () => {})

test('page header includes Ginew', () => {
  render(
    <Provider store={store}>
      <Tennis />
    </Provider>
  )
  const heading = screen.getAllByRole('button')
  expect(heading[0].innerHTML).toContain('View Player')
})

test('dispatches fetchPlayer action', async () => {
  render(
    <Provider store={store}>
      <Tennis loadedPlayer =  {()  =>{}} />
      
    </Provider>
  )
  const button = screen.getAllByRole('button')
  fireEvent.click(button[0])
  await waitFor(() => {
  expect(fetchPlayer).toHaveBeenCalled()
  })
})
