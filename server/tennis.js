
const fetch = require('node-fetch')
const request = require('superagent')
const express = require('express')

const router = express.Router()

require('dotenv').config()

const apiKey = process.env.TMDB_API_KEY


router.get('/:playername', (req, res) => {
  
  const playername = req.params.playername

  const options = {
    
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    }
  }
  return fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/search/${playername}`, options)
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
      return res.json(data)
    })
    .catch((err) => console.error(err)) 
})

router.get('/image/:id', (req, res) => {
  const playerid = req.params.id

  request.get(`https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerid}/image`)
    .set({
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    })
    .then(response => {
      // F4 F3 A3 43 F4
      const buffer = new Buffer.from(response.body).toString('base64')
      res.json(buffer)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})



module.exports = router