import { RECEIVE_POSTS } from '../actions'

function subreddits(state = [], action) {
  const { type, payload } = action

  if (type === RECEIVE_POSTS) {
    return payload
  }
  else {
    return state
  }
  
  // switch (type) {
  //   case RECEIVE_POSTS:
  //     return payload
  //   default:
  //     return state
  // }
}

export default subreddits
