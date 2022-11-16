import { SHOW_ERROR } from '../actions'

function errorMessage(state = '', action) {
  const { type, payload } = action

if(type === SHOW_ERROR){
  return payload
}
else{
  return state
}

  // switch (type) {
  //   case SHOW_ERROR:
  //     return payload
  //   default:
  //     return state
  // }
}

export default errorMessage
