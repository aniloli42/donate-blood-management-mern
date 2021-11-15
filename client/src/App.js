import React from "react"
import { Route, Switch } from "react-router-dom"
import "./Styles/App.css"

import {
	Signup,
	Login,
	Forget,
	Dashboard,
	Profile,
	Security,
	Requests,
	DonationHistory,
} from "./Pages"

import NotFound from "./Components/NotFound/NotFound"
import OTP from "./Pages/OTP/OTP"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"
import { MessageCard } from "./Components"

function App() {
	return (
		<>
			<MessageCard />
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/profile/:id' component={Profile} />
				<Route exact path='/security' component={Security} />
				<Route exact path='/requests' component={Requests} />
				<Route exact path='/donation-history' component={DonationHistory} />

				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/verify-otp' component={OTP} />
				<Route exact path='/change-password' component={ChangePassword} />

				<Route exact path='/forget-password' component={Forget} />
				<Route path='*' component={NotFound} />
			</Switch>
		</>
	)
}

export default App
