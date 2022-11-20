import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// import ErrorMessage from './ErrorMessage'
// import LoadSubreddit from './LoadSubreddit'
// import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import { fetchTennisImage, fetchTennisImageByPlayer } from '../apis/tennis'
import Tennis from './Tennis'
import Header from './Header'
import Footer from './Footer'
// import GetRanPlayer from './GetRanPlayer'

function App() {
  const [image, setImage] = useState('')
  const tennis = useSelector((state) => state.tennis)
  console.log(tennis)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const nadalImage = await fetchTennisImageByPlayer('Nadal')
  //     // setImage(nadalImage)
  //     // setPlayerName('Nadal R.')
  //     loadPlayerImage(tennis.id)
  //   }

  //   fetchData()
  // }, [])

  // const loadedPlayer = async (player) => {
  //   const image = await fetchTennisImage(player.id)
  //   setImage(image)
  //   setPlayerName(player.name)
  // }

  const loadPlayerImage = async (playerId) => {
    const image = await fetchTennisImage(playerId)
    setImage(image)
  }

  loadPlayerImage(tennis.id)

  return (
    <div className="app">
      <Header />

      <WaitIndicator />
      <Tennis />
      <img src={image} alt="tennis player" />
      <h1>
        {' '}
        <pre>{tennis.name} </pre>{' '}
      </h1>
      <hr />
      {/* <GetRanPlayer /> */}

      <Footer />
    </div>
  )
}

export default App
