
import React, { useState, useEffect } from 'react'

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'
import { fetchTennisImage } from '../apis/tennis'
import Tennis from './Tennis'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [image, setImage] = useState('')
  useEffect(() => { 
    fetchTennisImage(14486).then((url) => {
      setImage(url)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])
  return (
    <div className="app">
      <Header/>
      {/* <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList /> */}

      <Tennis/>
      <Footer/>
      {image && <img src={image} alt="tennis player"/>}
    </div>
  )
}

export default App
