const reducer = (
  state = { historyCount: 0, requestCount: 0, pendingCount: 0 },
  action,
) => {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, ...action.payload }

    case 'CLEAR_STATUS':
      return { historyCount: 0, requestCount: 0, pendingCount: 0 }

    default:
      return state
  }
}

export default reducer
