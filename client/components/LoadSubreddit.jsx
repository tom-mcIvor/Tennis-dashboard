import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPosts } from '../actions'



function LoadSubreddit({ children }) {
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
    dispatch(fetchPosts(formData.name))
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
          Fetch Posts
        </button>
      </form>
      {children}
    </div>
  )
}

export default LoadSubreddit
