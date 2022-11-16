import React, { useState } from 'react'

import { useDispatch, useSelector} from 'react-redux'


import { fetchPlayer } from '../actions'

function LoadSubreddit() {
  const tennis = useSelector((state) => state.tennis)

  console.log(tennis);

  const dispatch = useDispatch()

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

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(fetchPlayer(formData.name))
    setFormData({
      name: '',
    })
  }
  return (
    <div>
      <form action="">

      <label htmlFor="name">Name: </label>
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>

        <button onClick={handleSubmit}>
          Fetch Player
        </button>
      </form>
      {Object.keys(tennis).length != 0 && tennis.results[0].entity.id}
    </div>
  )
}

export default LoadSubreddit
