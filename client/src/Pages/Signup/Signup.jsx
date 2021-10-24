import React, { useRef, useState } from "react"
import "./signup.css"
import logo from "../../Assets/Images/blood.svg"
import show from "../../Assets/Images/eye.svg"
import hide from "../../Assets/Images/eye-off.svg"
import { Link } from "react-router-dom"

let inputData = {
  name: "",
  email: "",
  bloodtype: "O+",
  temporaryaddress: "",
  permanentaddress: "",
  password: "",
}

const Login = () => {
  const [formData, setformData] = useState(inputData)

  const updateFormData = (e) => {
    setformData((prevformData) => {
      return { ...prevformData, [e.target.name]: e.target.value }
    })
  }

  const password = useRef(null)

  const changePasswordType = (e) => {
    if (password.current.type === "password") {
      e.target.src = hide
      password.current.type = "text"
      return
    }

    e.target.src = show
    password.current.type = "password"
    return
  }

  return (
    <div className="user-entry">
      {/* Brand Showcase */}

      <div className="brand-showcase">
        {/* Brand Logo */}
        <div className="brand-logo">
          <img src={logo} alt="" />
          <h1>DONATE</h1>
        </div>
        <p className="brand-slogon">
          Every drop of blood matters, if you can save life
        </p>
      </div>
      <div className="entry-form-div">
        <form className="entry-form signup" method="post">
          <h2>Signup</h2>
          <div className="entry-elements">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={updateFormData}
              autoComplete="off"
              value={formData.name}
            />
          </div>

          <div className="entry-elements">
            <label htmlFor="bloodtype">Blood Type</label>
            <select
              name="bloodtype"
              id="bloodtype"
              value={formData.bloodtype}
              onChange={updateFormData}
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
            </select>
          </div>

          <div className="entry-elements">
            <label htmlFor="temporaryaddress">Temporary Address</label>
            <input
              type="text"
              name="temporaryaddress"
              id="temporaryaddress"
              autoComplete="off"
              value={formData.temporaryaddress}
              onChange={updateFormData}
            />
          </div>

          <div className="entry-elements">
            <label htmlFor="permanentaddress">Permanent Address</label>
            <input
              type="text"
              name="permanentaddress"
              id="permanentaddress"
              autoComplete="off"
              value={formData.permanentaddress}
              onChange={updateFormData}
            />
          </div>

          <div className="entry-elements">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              autoComplete="off"
              onChange={updateFormData}
            />
          </div>
          <div className="entry-elements">
            <label htmlFor="password">Password</label>
            <div className="group-entry-element">
              <input
                type="password"
                name="password"
                ref={password}
                id="password"
                autoComplete="off"
                onChange={updateFormData}
                value={formData.password}
              />
              <img
                src={show}
                alt="show hide icon"
                onClick={changePasswordType}
              />
            </div>
          </div>

          <div className="entry-button">
            <button type="submit">REGISTER</button>
          </div>
        </form>

        <div className="entry-message">
          <p>Already have account?</p>
          <Link to="/">Click Here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
