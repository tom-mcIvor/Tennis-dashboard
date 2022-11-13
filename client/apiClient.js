import request from 'superagent'


export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6089442d10msh761447d6ab1388cp1bf39ejsn9308ea310980',
		'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
	}
};

export function getTennisData() {
  return fetch('https://tennisapi1.p.rapidapi.com/api/tennis/search/nadal', options)
    .then((res) => res.json())
    .catch((err) => console.error(err)) // I would personally handle this error in the component, so that we can show the user something useful if the fetch fails, like, "Hey User! I couldn't fetch this for you."
}


// export function getTennisData() {
//   return request
//     .get('https://rapidapi.com/BettingAPI/api/tennis-odds/details')
//     .then((res) => res.body.activity)
// }


