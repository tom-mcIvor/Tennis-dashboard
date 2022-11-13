import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'

import Header from "./Header";
import Footer from "./Footer";
import Data from "./Tennisdata";

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
