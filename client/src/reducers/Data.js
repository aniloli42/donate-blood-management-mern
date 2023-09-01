const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, ...action.payload }

    case 'GET_OWN_REQUESTS':
      return state

    case 'GET_PROFILE':
      return state

    case 'GET_ALL_DATA':
      return state

    case 'CLEAR_DATA':
      return {}

    default:
      return state
  }
}

export default reducer
