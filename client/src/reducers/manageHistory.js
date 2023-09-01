const reducer = (state = { status: false, history: {} }, action) => {
  switch (action.type) {
    case 'GET_HISTORY':
      return {
        ...state,
        status: true,
        history: action.payload,
      }

    case 'REMOVE_HISTORY':
      return { status: false, history: {} }

    default:
      return state
  }
}

export default reducer
