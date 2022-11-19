import React, { useState } from 'react'
import Button from '@mui/material/Button';

import { /* useDispatch ,*/ useSelector } from 'react-redux'

// import { fetchPlayer } from '../actions'

import { fetchtennisplayer/* , fetchTennisImage */ } from '../apis/tennis'

function LoadSubreddit(props) {
  const tennis = useSelector((state) => state.tennis)
  // const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    // dispatch(fetchPlayer(formData.name))
    const response = await fetchtennisplayer(formData.name)
    const id = response.results[0].entity.id

    props.loadedPlayer(id)

    console.log(id)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name: </label>
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>

        <Button type="submit" variant="contained">
          Fetch Player
        </Button>

      </form>
      {Object.keys(tennis).length != 0 && tennis.results[0].entity.id}
    </div>
  )

}

export default LoadSubreddit
