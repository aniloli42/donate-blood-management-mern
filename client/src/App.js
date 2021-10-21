import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './Components'
import './Styles/App.css'
import './Styles/Utility.css'
import {
	Signup,
	Login,
	Forget,
	OTP,
	ChangePassword,
	MainComponent
} from './Pages'

// import { loginValidation } from './Validation'

function App() {
	/* 	const getLoginResult = loginValidation() // loginValidation Return an Object: {status: boolean} if(login) {status:true, profile} else { status: false } */

	return (
		<>
			<main>
				<Switch>
					<Route exact path="/">
						<Header />
						<MainComponent />
					</Route>

					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/forget-password" component={Forget} />
					<Route exact path="/verify-otp" component={OTP} />
					<Route exact path="/change-password" component={ChangePassword} />

					<Route exact path="/:pages">
						<Header />
						<MainComponent />
					</Route>

					<Route>Error 404 Not Found</Route>
				</Switch>
			</main>
		</>
	)
}

export default App
