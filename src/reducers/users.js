let initState = {
  items: [],
  item: {},
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      const a = {a: 'aaa'}
      const b = {a: '!', ...a}
      return state
  }

  return state
}
