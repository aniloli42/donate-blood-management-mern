import React, { useEffect } from "react"
import "./maincomponent.css"
import { useNavigate } from "react-router-dom"
import { Header } from "../../Components"

import { useDispatch } from "react-redux"
import { logout } from "./../../Actions/Auth"
import { setProfile } from "./../../Actions/Profile"

const MainComponent = ({ children }) => {
	const dispatch = useDispatch()
	const history = useNavigate()

	useEffect(() => {
		const token = localStorage.getItem("token")

		if (!token) {
			return dispatch(logout(history))
		}

		dispatch({
			type: "LOGIN",
			payload: {
				token: localStorage.getItem("token"),
			},
		})
		dispatch(setProfile(history))
	}, [dispatch, history])

	return (
		<>
			<Header />
			<div className="main-component">{children}</div>
		</>
	)
}

export default MainComponent
