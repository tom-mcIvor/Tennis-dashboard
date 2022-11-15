import request from 'superagent'

export function fetchtennisplayer(playername) {
  return request
      .get(`/api/v1/tennis/${playername}`)
      .then(res => res.body)
}


