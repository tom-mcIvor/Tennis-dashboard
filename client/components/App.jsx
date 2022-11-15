import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Tennis from './Tennis'

function App() {
  return (
    <div className="app">
      <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />

      <Tennis/>
    </div>
  )
}

export default App
