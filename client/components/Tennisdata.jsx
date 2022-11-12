import React, { useState, useEffect } from 'react'

import { getTennisData } from '../apiClient'

function Data() {


  const [activities, setActivities] = useState(null)

  useEffect(() => {

    getTennisData()
      .then((res) => {
        console.log(res);

        setActivities(res)
        console.log(res)

      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (

    <>
      <h2>{JSON.stringify(activities)}</h2>

    </>

  )

}

export default Data