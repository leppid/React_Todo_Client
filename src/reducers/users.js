let initState = {
  user: {}
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_USER':
      let user = action.payload
      console.log(user)
      return state
  }

  return state
}
