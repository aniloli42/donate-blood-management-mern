import axios from "axios"
require("dotenv").config()

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL })

API.interceptors.request.use((req) => {
	if (localStorage.getItem("token")) {
		req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
	}
	return req
})

// Auth
export const login = (formdata) => API.post("/auth/login", formdata)
export const signup = (formdata) => API.post("/auth/signup", formdata)
export const logout = () => API.delete("/auth/delete-token")

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

// blood management endpoints requests
export const fetchData = (id) => API.post("/data/fetchData", id)
