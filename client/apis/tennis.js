import request from 'superagent'

export function fetchtennisplayer(playername) {
  return request.get(`/api/v1/tennis/${playername}`).then((res) => res.body)
}

export function fetchTennisImage(id) {
  return request.get(`/api/v1/tennis/image/${id}`).then((res) => {
    const image = 'data:image/jpeg;base64, ' + res.body
    return image
  })
}

// export function fetchtennisplayer(playername) {
//   return request
//       .get(`/api/v1/tennis/${playername}`)
//       .then(res => res.body)
// }
