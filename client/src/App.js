import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header, Sidebar } from './Components'
import './Styles/App.css'
import { Signup, Login } from './Pages'

// import { loginValidation } from './Validation'

function App() {
	/* 	const getLoginResult = loginValidation() // loginValidation Return an Object: {status: boolean} if(login) {status:true, profile} else { status: false } */

	return (
		<>
			<main>
				<Switch>
					<Route exact path="/" component={Header} />
					<Route exact path="/" component={Sidebar} />

					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
				</Switch>
			</main>
		</>
	)
}

export default App
