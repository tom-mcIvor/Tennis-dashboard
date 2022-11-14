const path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')

require('dotenv').config()

const apiKey = process.env.TMDB_API_KEY

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.get('/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  let index = Math.floor(Math.random() * greetings.length)
  res.json({ greeting: greetings[index] })
})


server.get('/tennis', (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    }
  }
  return fetch('https://tennisapi1.p.rapidapi.com/api/tennis/search/murray', options)
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
      return res.json(data)
    })
    .catch((err) => console.error(err)) 
})



module.exports = server