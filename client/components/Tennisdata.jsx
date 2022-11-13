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

        console.log(res.results[0].entity.country.name);

        b = res.results[0].entity.country.name
        console.log(b);

        setActivities(b)

      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  console.log(b);

  const a = activities

  return (

    <>


      <h2>{a}</h2>

    </>

  )

}

export default Data

