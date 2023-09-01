import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

import {
  Dashboard,
  DonationHistory,
  ForgetPassword,
  Login,
  Profile,
  Requests,
  Security,
  Signup
} from './pages'

import { useSelector } from 'react-redux'
import { Loader, MessageCard } from './components'
import NotFound from './components/NotFound/NotFound'

function App() {
  const { status: loaderStatus } = useSelector(state => state.Loader)

  return (
    <>
      {loaderStatus && <Loader />}
      <MessageCard />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/requests" element={<Requests />} />
        <Route exact path="/donation-history" element={<DonationHistory />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
