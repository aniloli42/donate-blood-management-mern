import * as api from '../api/API'

export const fetchData = id => async dispatch => {
  try {
    const { data } = await api.fetchData(id)

    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    })
  } catch (e) {
    console.log(e.message)
  }
}
