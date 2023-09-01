import * as api from './../api/API'
import { displayMessage } from './Message'
import { setProfile } from './Profile'

export const login = (formData, history, setSubmitting) => async dispatch => {
  try {
    const { data } = await api.login(formData)
    const { token, refreshToken } = await data

    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)

    dispatch({ type: 'LOGIN' })
    setSubmitting(false)
    history('/', { replace: true })
  } catch (error) {
    setSubmitting(false)
    const message = error?.response?.data?.message ?? error.message
    dispatch(displayMessage(message))
  }
}

export const signup = (formData, history, setSubmitting) => async dispatch => {
  try {
    const { data } = await api.signup(formData)
    const { token, refreshToken } = await data

    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)

    dispatch({
      type: 'LOGIN'
    })
    setSubmitting(false)

    history('/', { replace: true })
  } catch (error) {
    setSubmitting(false)

    const message = error?.response?.data?.message ?? error.message
    dispatch(displayMessage(message))
  }
}

export const logout = history => async dispatch => {
  try {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) await api.logout({ refreshToken })

    localStorage.clear()
    history('/login', { replace: true })

    dispatch({ type: 'LOGOUT' })
    dispatch({ type: 'CLEAR_DATA' })
    dispatch({ type: 'CLEAR_HISTORYS' })
    dispatch({ type: 'CLEAR_PROFILE' })
    dispatch({ type: 'CLEAR_REQUEST' })
    dispatch({ type: 'CLEAR_STATUS' })
  } catch (error) {
    console.log(error.message)

    history('/login', { replace: true })
    localStorage.clear()

    dispatch({ type: 'LOGOUT' })
    dispatch({ type: 'CLEAR_DATA' })
    dispatch({ type: 'CLEAR_HISTORYS' })
    dispatch({ type: 'CLEAR_PROFILE' })
    dispatch({ type: 'CLEAR_REQUEST' })
    dispatch({ type: 'CLEAR_STATUS' })
  }
}

export const changeEmail = formData => async dispatch => {
  try {
    const { data } = await api.changeEmail(formData)
    const { message } = await data

    dispatch(displayMessage(message))
    dispatch(setProfile())
  } catch (error) {
    const message = error?.response?.data?.message ?? 'Something Went Wrong!'
    console.error(error.message)

    dispatch(displayMessage(message))
  }
}

export const changePassword = (formData, setFormData) => async dispatch => {
  try {
    const { data } = await api.changePassword(formData)
    const { message } = await data

    dispatch(displayMessage(message))
    setFormData(prev => {
      return { ...prev, oldPassword: '', newPassword: '', retypePassword: '' }
    })
  } catch (error) {
    const message = error?.response?.data?.message ?? 'Something Went Wrong!'
    console.error(error.message)

    dispatch(displayMessage(message))
  }
}

export const deleteAccount = (formData, history) => async dispatch => {
  try {
    const { data } = await api.deleteAccount(formData)
    const { message } = await data

    dispatch(displayMessage(message))
    dispatch(logout(history))
  } catch (error) {
    const message = error?.response?.data?.message ?? 'Something Went Wrong!'
    console.error(error.message)

    dispatch(displayMessage(message))
  }
}
