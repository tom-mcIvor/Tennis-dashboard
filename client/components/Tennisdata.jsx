import React, { useState, useEffect } from 'react'

import { getTennisData } from '../apiClient'

function Data() {


  const [activities, setActivities] = useState(null)
  const [aactivities, ssetActivities] = useState(null)
  const [aaactivities, sssetActivities] = useState(null)



  let b
  let c

  useEffect(() => {

    getTennisData()
      .then((res) => {
        console.log(res);

        console.log(res.results[0].entity.country.name);


        console.log(res.results[0].entity.slug);

        c = res.results[0].entity.slug

        b = res.results[0].entity.country.name
        console.log(b);


        setActivities(b)
        ssetActivities(c)
        sssetActivities(c)


      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])





  return (

    <>

      <h1>
        <p>
          {aaactivities}
        </p>
      </h1>

      
      <h1>
        <p>
          {b}
        </p>
      </h1>

      <h1>
        <p>
          {aactivities}
        </p>
      </h1>

      <h2>{activities}</h2>

    </>

  )

}

export default Data

