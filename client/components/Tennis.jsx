import { useState } from 'react'
import Button from '@mui/material/Button';
import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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


      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="PlayerName:" variant="outlined"
          name="name"
          onChange={handleChange}
          value={formData.name}
        >
        </TextField>

        <Button type="submit" variant="contained">
          Fetch Player
        </Button>
      </Box>

      {Object.keys(tennis).length != 0 && tennis.results[0].entity.id}
    </div>
  )

}

export default LoadSubreddit
