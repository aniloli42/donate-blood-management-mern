import React from "react"
import { Redirect } from "react-router"

const Logout = () => {
  return (
    <>
      <Redirect to="/login" />
    </>
  )
}

export default Logout
