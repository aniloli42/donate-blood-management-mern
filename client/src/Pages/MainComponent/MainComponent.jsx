import React, { useEffect } from "react"
import "./maincomponent.css"
import { Route, Switch, useHistory } from "react-router-dom"
import { Header } from "../../Components"
import Dashboard from "./../Dashboard/Dashboard"
import Profile from "./../Profile/Profile"
import Security from "./../Security/Security"
import DonationHistory from "./../DonationHistory/DonationHistory"
import Requests from "./../Requests/Requests"

import { useDispatch } from "react-redux"
import { logout } from "./../../Actions/Auth"

const MainComponent = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		const profile = localStorage.getItem("profile")

		if (!profile) {
			return dispatch(logout(history))
		}

		if (typeof profile !== "string") {
			return dispatch(logout(history))
		}
	}, [dispatch, history])

	return (
		<>
			<Header />
			<div className='main-component'>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact key='profile' path='/profile' component={Profile} />
					<Route exact key='security' path='/security' component={Security} />
					<Route
						exact
						key='donation-history'
						path='/donation-history'
						component={DonationHistory}
					/>
					<Route exact key='requests' path='/requests' component={Requests} />
				</Switch>
			</div>
		</>
	)
}

export default MainComponent
