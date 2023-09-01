const reducer = (state = { message: null, status: false }, action) => {
  switch (action.type) {
    case 'DISPLAY_MESSAGE':
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      }

    case 'CLEAR_MESSAGE':
      return { message: null, status: false }

    default:
      return state
  }
}

export default reducer
