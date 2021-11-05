import React from "react"
import { Route, Switch } from "react-router-dom"
import "./Styles/App.css"

import { Signup, Login, Forget, MainComponent } from "./Pages"
import NotFound from "./Components/NotFound/NotFound"
import OTP from "./Pages/OTP/OTP"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<MainComponent />
				</Route>

				<Route exact path='/login'>
					<Login />
				</Route>

				<Route exact path='/signup'>
					<Signup />
				</Route>

				<Route exact path='/verify-otp'>
					<OTP />
				</Route>

				<Route exact path='/change-password'>
					<ChangePassword />
				</Route>

				<Route exact path='/forget-password'>
					<Forget />
				</Route>

				<Route exact path='/page-not-found'>
					<NotFound />
				</Route>

				<Route exact path='/:slug'>
					<MainComponent />
				</Route>
			</Switch>
		</>
	)
}

export default App
