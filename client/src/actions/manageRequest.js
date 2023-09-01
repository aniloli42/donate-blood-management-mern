import * as api from './../api/API'

export const getRequest = id => async dispatch => {
  try {
    const { data } = await api.getRequest(id)
    const { request } = await data
    dispatch({ type: 'GET_REQUEST', payload: request })
  } catch (e) {
    console.log(e.message)
  }
}

export const removeRequest = () => {
  return {
    type: 'REMOVE_REQUEST',
  }
}
