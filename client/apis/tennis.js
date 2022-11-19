import request from 'superagent'

export function fetchtennisplayer(playername) {
  console.log(`/api/v1/tennis/${playername}`)
  return request.get(`/api/v1/tennis/${playername}`).then((res) => res.body)
}

export function fetchTennisImage(id) {
  return request.get(`/api/v1/tennis/image/${id}`).then((res) => {
    const image = 'data:image/jpeg;base64, ' + res.body
    return image
  })
}

export async function fetchTennisImageByPlayer(playerName) {
  const playerIdResponse = await request.get(`/api/v1/tennis/${playerName}`)
  const firstPlayerId = playerIdResponse.body.results[0].entity.id
  const imageResponse = await request.get(`/api/v1/tennis/image/${firstPlayerId}`)
  const image = `data:image/jpeg;base64, ${imageResponse.body}`
  return image
}

// export function fetchtennisplayer(playername) {
//   return request
//       .get(`/api/v1/tennis/${playername}`)
//       .then(res => res.body)
// }
