import React, { useState, useEffect } from 'react'

import { getTennisData } from '../apiClient'

function Data() {


  const [activities, setActivities] = useState(null)

  let b 

  useEffect(() => {

    getTennisData()
      .then((res) => {
        console.log(res);

        console.log(res.results[0].entity.country.name);

        b = res.results[0].entity.country.name

        setActivities(res)

      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  const a = JSON.stringify(activities)

  return (

    <>

    <h1>{b}</h1>

      <h2>{a}</h2>

    </>

  )

}

export default Data

fdsgfsgsfgsf