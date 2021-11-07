import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import "./Styles/App.css"

import { Signup, Login, Forget, MainComponent } from "./Pages"
import NotFound from "./Components/NotFound/NotFound"
import OTP from "./Pages/OTP/OTP"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"
import { MessageCard } from "./Components"

function App() {
	const [isShowMessage, setIsShowMessage] = useState(true)

	const toggleMessage = (e) => {
		e?.preventDefault()
		setIsShowMessage((prevShowMessage) => !prevShowMessage)
	}

	return (
		<>
			{isShowMessage && <MessageCard toggleMessage={toggleMessage} />}
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
