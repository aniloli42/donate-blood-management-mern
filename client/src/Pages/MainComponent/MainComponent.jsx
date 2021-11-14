import React, { useEffect } from "react"
import "./maincomponent.css"
import { useHistory } from "react-router-dom"
import { Header } from "../../Components"

import { useDispatch } from "react-redux"
import { logout } from "./../../Actions/Auth"

const MainComponent = ({ children }) => {
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		const token = localStorage.getItem("token")

		if (!token) {
			return dispatch(logout(history))
		}

		const profile = localStorage.getItem("profile")

		if (!profile) {
			return dispatch(logout(history))
		}

		if (typeof profile !== "string") {
			return dispatch(logout(history))
		}

		dispatch({
			type: "LOGIN",
			payload: {
				profile: JSON.parse(profile),
				token: localStorage.getItem("token"),
			},
		})
	}, [dispatch, history])

	return (
		<>
			<Header />
			<div className='main-component'>
				{children}
				{/* <Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/profile' component={Profile} />
					<Route exact path='/security' component={Security} />
					<Route exact path='/donation-history' component={DonationHistory} />
					<Route exact path='/requests' component={Requests} />
				</Switch> */}
			</div>
		</>
	)
}

export default MainComponent
