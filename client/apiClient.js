import request from 'superagent'

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getTennisData() {
  return request
    .get('https://rapidapi.com/api/tennis/search/nadal')
    .then((res) => res.body.activity)
}