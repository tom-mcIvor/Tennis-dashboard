
import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Tennis from './Tennis'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />

      <Tennis/>
      <Footer/>

    </div>
  )
}

export default App
