const reducer = (state = { status: false, request: {} }, action) => {
  switch (action.type) {
    case 'GET_REQUEST':
      return {
        ...state,
        status: true,
        request: action.payload
      }

    case 'REMOVE_REQUEST':
      return { status: false, request: {} }

    default:
      return state
  }
}

export default reducer
