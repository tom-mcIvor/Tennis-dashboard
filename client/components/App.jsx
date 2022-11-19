
import React, { useState, useEffect } from 'react'

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
// import WaitIndicator from './WaitIndicator'
import { fetchTennisImage, fetchTennisImageByPlayer } from '../apis/tennis'
import Tennis from './Tennis'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [image, setImage] = useState('')
  useEffect(async () => {
    const nadalImage = await fetchTennisImageByPlayer("Nadal")
    setImage(nadalImage)
  }, [])

  const loadedPlayer = async (playerId)=>{
    const image = await fetchTennisImage(playerId)
    setImage(image)
  }

  return (
    
    <div className="app">
      <Header />
      {/* <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList /> */}

      <Tennis loadedPlayer={loadedPlayer} />
      {image && <img src={image} alt="tennis player" />}
      <Footer />
    </div>
  )
}

export default App
