import { SHOW_ERROR, REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  if(type === REQUEST_POSTS){
    return true
  }
  if(type === RECEIVE_POSTS){
    return false
  }
  if(type === SHOW_ERROR){
    return false
  }
  else{
    return state
  }

  // switch (type) {
  //   case REQUEST_POSTS:
  //     return true
  //   case RECEIVE_POSTS:
  //     return false
  //   case SHOW_ERROR:
  //     return false
  //   default:
  //     return state
  // }
  
}

export default waiting
