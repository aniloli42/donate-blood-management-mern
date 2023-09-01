import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const baseURL = process.env.REACT_APP_API_BASEURL

const API = axios.create({ baseURL })

API.interceptors.request.use(async req => {
  const token = localStorage.getItem('token')

  if (!token) return req
  req.headers.Authorization = `Bearer ${token}`

  const user = jwt_decode(token)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
  if (!isExpired) return req

  const refreshToken = localStorage.getItem('refreshToken')
  if (refreshToken) {
    try {
      const {
        data: { token: newToken }
      } = await axios.post(`${baseURL}/auth/token`, {
        refreshToken
      })

      localStorage.setItem('token', newToken)
      req.headers.Authorization = `Bearer ${newToken}`
    } catch (e) {
      console.error(e.message)
      if (e?.response?.status !== 403) return
      localStorage.clear()
      window.location.replace('/login')
    }
  }
  return req
})

// Auth
export const login = formdata => API.post('/auth/login', formdata)
export const signup = formdata => API.post('/auth/signup', formdata)
export const logout = data => API.post('/auth/logout', data)

// Modify
export const changeEmail = formData => API.patch('/auth/change-email', formData)

export const changePassword = formData =>
  API.patch('/auth/change-password', formData)

export const changeForgetPassword = formdata =>
  API.patch('/auth/change-forget-password', formdata)

export const deleteAccount = formData =>
  API.post(`/auth/delete-account`, formData)

// otp
export const sendOTP = email => API.post('/otp/create', email)
export const verifyOTP = formData => API.post('/otp/verify', formData)

// Profile
export const getProfile = () => API.get('/profile')
export const updateProfile = formData => API.patch('/profile/update', formData)

// Donation History
export const getHistory = id => API.get(`/history/${id}`)
export const getHistorys = () => API.get('/history')
export const createHistory = formData => API.post('/history/create', formData)
export const updateHistory = (formData, id) =>
  API.patch(`/history/update/${id}`, formData)
export const deleteHistory = id => API.delete(`/history/delete/${id}`)

// Requests
export const getRequest = id => API.get(`/requests/own/${id}`)
export const getOwnRequest = () => API.get(`/requests/own`)
export const getOtherRequest = () => API.get(`/requests/other`)
export const getRecentRequest = () => API.get(`/requests/recent`)
export const createRequest = formData => API.post(`/requests/create`, formData)
export const updateRequest = (formData, id) =>
  API.patch(`/requests/update/${id}`, formData)
export const deleteRequest = id => API.delete(`/requests/delete/${id}`)

// Status
export const getStatus = () => API.get('/profile/status')
