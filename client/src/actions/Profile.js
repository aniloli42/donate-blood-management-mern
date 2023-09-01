import * as api from './../api/API'
import { logout } from './Auth'
import { displayMessage } from './Message'

export const setProfile = history => async dispatch => {
  try {
    const { data } = await api.getProfile()
    const { profile } = await data
    dispatch({
      type: 'SET_PROFILE',
      payload: profile
    })
  } catch (err) {
    console.error(err.message)

    if (err?.response?.status === 500) return
    if (err?.response?.status !== 403) return
    dispatch(logout(history))
  }
}

export const updateProfile =
  (formData, toggleEdit, setSubmitting) => async dispatch => {
    try {
      const { data } = await api.updateProfile(formData)
      const { message, profile } = await data

      dispatch(displayMessage(message))
      dispatch({
        type: 'SET_PROFILE',
        payload: profile
      })

      setSubmitting(false)
      toggleEdit()
    } catch (error) {
      setSubmitting(false)
      const message = error?.response?.data?.message ?? 'Something Went Wrong!'
      console.error(error.message)

      dispatch(displayMessage(message))
    }
  }
