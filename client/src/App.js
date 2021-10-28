import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import "./Styles/App.css"
import { Signup, Login, Forget, MainComponent } from "./Pages"

// import { loginValidation } from './Validation'
import NotFound from "./Components/NotFound/NotFound"
import { useSelector } from "react-redux"
import OTP from "./Pages/OTP/OTP"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"

function App() {
  /* 	const getLoginResult = loginValidation() // loginValidation Return an Object: {status: boolean} if(login) {status:true, profile} else { status: false } */
  const isAuth = true

  const Auth = useSelector((state) => state.Auth)

  console.log(Auth)

  return (
    <>
      <Switch>
        <Route exact path="/">
          {isAuth ? <MainComponent /> : <Login />}
        </Route>

        <Route exact path="/login">
          <Redirect to="/" />
        </Route>

        <Route exact path="/signup">
          {isAuth ? <Redirect to="/" /> : <Signup />}
        </Route>

        <Route exact path="/verify-otp">
          {isAuth ? <Redirect to="/" /> : <OTP />}
        </Route>

        <Route exact path="/change-password">
          {isAuth ? <Redirect to="/" /> : <ChangePassword />}
        </Route>

        <Route exact path="/forget-password">
          {isAuth ? <Redirect to="/" /> : <Forget />}
        </Route>

        <Route exact path="/page-not-found">
          <NotFound />
        </Route>

        <Route exact path="/:slug">
          {isAuth ? <MainComponent /> : <Redirect to="/page-not-found" />}
        </Route>
      </Switch>
    </>
  )
}

export default App
