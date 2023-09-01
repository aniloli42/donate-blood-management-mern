import handleOverflow from '../utils/hideOverFlow'

const reducer = (state = { status: false }, { type, payload }) => {
  switch (type) {
    case 'DISPLAY_LOADER':
      handleOverflow(!payload)
      return {
        ...state,
        status: payload,
      }

    default:
      return state
  }
}

export default reducer
