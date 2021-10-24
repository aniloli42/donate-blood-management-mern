import React from "react"
import "./maincomponent.css"
import { Switch, Route } from "react-router-dom"
import {
  Profile,
  DonationHistory,
  Logout,
  Requests,
  Dashboard,
  Security,
} from "../index"

const MainComponent = () => {
  return (
    <div className="main-component">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/security">
          <Security />
        </Route>
        <Route exact path="/donation-history">
          <DonationHistory />
        </Route>
        <Route exact path="/Logout">
          <Logout />
        </Route>
        <Route exact path="/requests">
          <Requests />
        </Route>
      </Switch>
    </div>
  )
}

export default MainComponent
