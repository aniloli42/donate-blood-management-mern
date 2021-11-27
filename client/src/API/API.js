import axios from "axios"
require("dotenv").config()

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL })

const intercept = API.interceptors.request.use((req) => {
	if (localStorage.getItem("token")) {
		req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
	}
	return req
})

axios.interceptors.request.eject(intercept)

// Auth
export const login = (formdata) => API.post("/auth/login", formdata)
export const signup = (formdata) => API.post("/auth/signup", formdata)
export const logout = (data) => API.post("/auth/logout", data)
export const getToken = (data) => API.post("/auth/token", data)

// Modify
export const changeEmail = (formData) =>
	API.patch("/auth/change-email", formData)

export const changePassword = (formData) =>
	API.patch("/auth/change-password", formData)

export const changeForgetPassword = (formdata) =>
	API.patch("/auth/change-forget-password", formdata)

export const deleteAccount = (formData) =>
	API.post(`/auth/delete-account`, formData)

// otp
export const sendOTP = (email) => API.post("/otp/create", email)
export const verifyOTP = (formData) => API.post("/otp/verify", formData)

// Profile
export const getProfile = () => API.post("/profile")
export const updateProfile = (formData) =>
	API.patch("/profile/update", formData)

// Donation History
export const getHistory = (id) => API.get(`/history/${id}`)
export const getHistorys = () => API.post("/history")
export const createHistory = (formData) => API.post("/history/create", formData)
export const updateHistory = (formData, id) =>
	API.patch(`/history/update/${id}`, formData)
export const deleteHistory = (id) => API.delete(`/history/delete/${id}`)

// Requests
export const getRequest = (id) => API.get(`/requests/own/${id}`)
export const getOwnRequest = () => API.post(`/requests/own`)
export const getOtherRequest = () => API.post(`/requests/other`)
export const getRecentRequest = () => API.post(`/requests/recent`)
export const createRequest = (formData) =>
	API.post(`/requests/create`, formData)
export const updateRequest = (formData, id) =>
	API.patch(`/requests/update/${id}`, formData)
export const deleteRequest = (id) => API.delete(`/requests/delete/${id}`)

// Status
export const getStatus = () => API.post("/profile/status")
