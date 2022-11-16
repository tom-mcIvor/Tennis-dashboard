import request from 'superagent'


export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getTennisData() {
  return fetch('https://tennisapi1.p.rapidapi.com/api/tennis/search/murray', options)
    .then((res) => res.json())
    .catch((err) => console.error(err)) 
  }


// export function getTennisData() {
//   return request
//     .get('https://rapidapi.com/BettingAPI/api/tennis-odds/details')
//     .then((res) => res.body.activity)
// }

