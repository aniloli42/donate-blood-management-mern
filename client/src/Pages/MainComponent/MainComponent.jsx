import React from "react"
import "./maincomponent.css"
import { Route, Switch, Redirect, useParams } from "react-router-dom"
import { Header } from "../../Components"
import Dashboard from "./../Dashboard/Dashboard"
import Profile from "./../Profile/Profile"
import Security from "./../Security/Security"
import DonationHistory from "./../DonationHistory/DonationHistory"
import Requests from "./../Requests/Requests"
import Pages from "../../Helper/Pages"

const MainComponent = () => {
  const { slug } = useParams()
  const isAuth = true

  return (
    <>
      {Pages(slug) === false && <Redirect to="/page-not-found" />}
      {!isAuth && <Redirect to="/" />}
      <Header />
      <div className="main-component">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact key="profile" path="/profile" component={Profile} />
          <Route exact key="security" path="/security" component={Security} />
          <Route
            exact
            key="donation-history"
            path="/donation-history"
            component={DonationHistory}
          />
          <Route exact key="requests" path="/requests" component={Requests} />
        </Switch>
      </div>
    </>
  )
}

export default MainComponent
