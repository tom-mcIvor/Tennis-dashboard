import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'

import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [count])

  return (
    <>

      <Header />

      <Data />

      <p>hello</p>


      <Footer />

    </>
  )
}

export default App
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
