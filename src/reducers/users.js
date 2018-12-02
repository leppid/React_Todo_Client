let initState = {
  message: {}
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case 'ADD_NOTIF':
      let notif = action.payload
      console.log(notif)
      return state
  }

  return state
}
