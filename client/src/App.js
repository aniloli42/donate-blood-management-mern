import React from "react"
import { Route, Switch } from "react-router-dom"
import "./Styles/App.css"

import {
	Signup,
	Login,
	ForgetPassword,
	Dashboard,
	Profile,
	Security,
	Requests,
	DonationHistory,
} from "./Pages"

import NotFound from "./Components/NotFound/NotFound"
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

				<Route exact path='/forget-password' component={ForgetPassword} />
				<Route path='*' component={NotFound} />
			</Switch>
		</>
	)
}

export default App
