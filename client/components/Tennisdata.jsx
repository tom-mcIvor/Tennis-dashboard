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


  const a = activities

  return (

    <>


      <h2>Top 100 players</h2>

      <label htmlFor="cars">Choose a player : </label>

      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

        



      <h1>
        <p>
          {b}
        </p>
      </h1>

      <h2>{a}</h2>

    </>

  )

}

export default Data

