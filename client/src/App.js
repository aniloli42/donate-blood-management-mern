import React from 'react'
import { Route, Switch , Redirect} from 'react-router-dom'
import './Styles/App.css'
import './Styles/Utility.css'
import {
	Signup,
	Login,
	Forget,
	MainComponent
} from './Pages'

// import { loginValidation } from './Validation'
import NotFound from './Components/NotFound/NotFound';

function App() {
	/* 	const getLoginResult = loginValidation() // loginValidation Return an Object: {status: boolean} if(login) {status:true, profile} else { status: false } */
	const isAuth = false

	return (

			
			
		<>
			<Switch>
				<Route exact path='/'  >
					{isAuth ? <MainComponent /> : <Login />}
				</Route>
				
				<Route exact path='/login'>
					<Redirect to='/' />
					</Route>

				<Route exact path='/signup' >
				{isAuth ? <Redirect to='/' /> : <Signup/>}
				</Route>


				<Route exact path='/forget-password'>
					{isAuth ? <Redirect to='/' /> : <Forget/>}
				</Route>
				
				<Route exact path='/page-not-found'>
					<NotFound/>
					</Route>
				
				<Route exact path='/:slug' >
				{ isAuth ? <MainComponent /> : <Redirect to='/page-not-found' /> }
				</Route>

				


			</Switch>
		</>
	)
}

export default App
