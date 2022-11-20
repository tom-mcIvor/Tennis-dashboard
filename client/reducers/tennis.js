import { SET_PLAYER } from '../actions'

const setPlayer = (state = {id: 15126, name: 'Murray .A'}, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PLAYER:
      return payload

    // if (action.type === SET_PLAYER){
    // return {... state,
    //      player:action.payload
    //}
    //}
    //
  }

  return state
}

export default setPlayer

// import { RECEIVE_PLAYER } from '../actions'

// function tennisplayerfun(state = {}, action) {
//   const { type, payload } = action

//   if (type === RECEIVE_PLAYER) {
//     return payload
//   }
//   else {
//     return state
//   }

//   // switch (type) {
//   //   case RECEIVE_POSTS:
//   //     return payload
//   //   default:
//   //     return state
//   // }
// }

// export default tennisplayerfun
