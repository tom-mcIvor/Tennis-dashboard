
import React, { useState, useEffect } from 'react'

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import { fetchTennisImage, fetchTennisImageByPlayer } from '../apis/tennis'
import Tennis from './Tennis'
import Header from './Header'
import Footer from './Footer'
import GetRanPlayer from './GetRanPlayer'

function App() {
  const [image, setImage] = useState('')
  const [playerName, setPlayerName] = useState('')

  useEffect(async () => {
    const nadalImage = await fetchTennisImageByPlayer("Nadal")
    setImage(nadalImage)
    setPlayerName("Nadal R.")
  }, [])

  const loadedPlayer = async (player) => {
    const image = await fetchTennisImage(player.id)
    setImage(image)
    setPlayerName(player.name)
  }

  return (

    <div className="app">
      <Header />

      <WaitIndicator />
      <Tennis loadedPlayer={loadedPlayer} />
      {image && <img src={image} alt="tennis player" />}
      {playerName && <h1> <pre>{playerName} </pre> </h1>}
      <hr />
      <GetRanPlayer />

      <Footer />
    </div>
  )
}

export default App
