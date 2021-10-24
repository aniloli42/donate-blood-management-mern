import React from "react"
import { useHistory } from "react-router-dom"
import "./notfound.css"

const NotFound = () => {
  const history = useHistory()

  const Back = () => {
    history.push("/login")
  }

  return (
    <>
      <div className="error-container">
        <div className="errorLabel">404</div>
        <p>Page Not Found!</p>
        <button onClick={Back}>GO HOME</button>
      </div>
    </>
  )
}

export default NotFound
