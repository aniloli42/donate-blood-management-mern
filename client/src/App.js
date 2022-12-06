import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Styles/App.css'

import {
	Dashboard,
	DonationHistory,
	ForgetPassword,
	Login,
	Profile,
	Requests,
	Security,
	Signup,
} from './Pages'

import { useSelector } from 'react-redux'
import { Loader, MessageCard } from './Components'
import NotFound from './Components/NotFound/NotFound'

function App() {
	const { status: loaderStatus } = useSelector((state) => state.Loader)

	const divStyle = {
		position: 'absolute',
		backgroundColor: '#00000050',
		inset: 0,
		zIndex: '10',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		userSelect: 'none',
	}

	const noticeTextStyle = {
		fontSize: '5vw',
		color: '#fffaff',
		fontWeight: 'bold',
		textAlign: 'center',
	}

	return (
		<>
			<div style={divStyle}>
				<div
					style={{
						display: 'flex',
						padding: '2rem',
						backgroundColor: '#010',
						flexDirection: 'column',
						borderRadius: 'vw',
						gap: '5vw',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						aria-hidden='true'
						style={{
							height: '14vw',
							width: '14vw',
							backgroundColor: '#cc0000',
							borderRadius: '1.5vw',
							border: '.5vw solid #fff',
							fontSize: '10vw',
							color: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						!
					</div>
					<p style={noticeTextStyle}>Under Maintenance</p>
				</div>
			</div>
			{loaderStatus && <Loader />}
			<MessageCard />
			<Routes>
				<Route exact path='/' element={<Dashboard />} />
				<Route path='/profile'>
					<Route index element={<Profile />} />
					<Route path=':id' element={<Profile />} />
				</Route>
				<Route exact path='/security' element={<Security />} />
				<Route exact path='/requests' element={<Requests />} />
				<Route
					exact
					path='/donation-history'
					element={<DonationHistory />}
				/>

				<Route exact path='/login' element={<Login />} />
				<Route exact path='/signup' element={<Signup />} />

				<Route
					exact
					path='/forget-password'
					element={<ForgetPassword />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
