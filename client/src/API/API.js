import axios from "axios"
require("dotenv").config()

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL })

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem("profile").token
		)}`

		return req
	}
})

// user management endpoints requests
export const signin = (formdata) => API.post("/login", formdata)
export const signup = (formdata) => API.post("/create", formdata)
export const updateUser = (formdata, id) =>
	API.patch(`/update/user/:${id}`, formdata)
export const deleteUser = (id) => API.delete(`/delete/:${id}`)

// blood management endpoints requests
