import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/blood.png'
import hide from '../../assets/images/eye-off.svg'
import show from '../../assets/images/eye.svg'
import './signup.css'

import { signup } from '../../actions/Auth'
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  stringValidation
} from '../../validation'

import { displayMessage } from '../../actions/Message'

const inputData = {
  name: '',
  email: '',
  bloodType: 'O+',
  temporaryAddress: '',
  permanentAddress: '',
  password: ''
}

const Signup = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [formData, setFormData] = useState(inputData)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token || token === '' || token === null || token === undefined) return
    history('/', { replace: true })
  })

  const updateFormData = e => {
    setFormData(prevFormData => {
      return { ...prevFormData, [e.target.name]: e.target.value }
    })
  }

  const password = useRef(null)

  const changePasswordType = e => {
    if (password.current.type === 'password') {
      e.target.src = hide
      password.current.type = 'text'
      return
    }

    e.target.src = show
    password.current.type = 'password'
    return
  }

  const handleSignUp = e => {
    e?.preventDefault()
    setSubmitting(true)

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.temporaryAddress === '' ||
      formData.permanentAddress === ''
    ) {
      setSubmitting(false)
      dispatch(displayMessage('All fields are required', true))
      return
    }

    if (!nameValidation(formData.name)) {
      setSubmitting(false)
      dispatch(displayMessage('Name is not valid', true))
      return
    }

    if (!stringValidation(formData.temporaryAddress)) {
      setSubmitting(false)
      dispatch(displayMessage('Invalid Temporary Address'))
      return
    }

    if (!stringValidation(formData.permanentAddress)) {
      setSubmitting(false)
      dispatch(displayMessage('Invalid Permanent Address'))
      return
    }

    if (!emailValidation(formData.email)) {
      setSubmitting(false)
      dispatch(displayMessage('Invalid Email'))
      return
    }

    const isValidPassword = passwordValidation(formData.password)

    if (!isValidPassword.status) {
      setSubmitting(false)
      dispatch(displayMessage(isValidPassword.message))
      return
    }

    dispatch(signup(formData, history, setSubmitting))
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
        <form
          className="entry-form signup"
          method="post"
          onSubmit={handleSignUp}
        >
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
            <label htmlFor="bloodType">Blood Type</label>
            <select
              name="bloodType"
              id="bloodType"
              value={formData.bloodType}
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
            <label htmlFor="temporaryAddress">Temporary Address</label>
            <input
              type="text"
              name="temporaryAddress"
              id="temporaryAddress"
              autoComplete="off"
              value={formData.temporaryAddress}
              onChange={updateFormData}
            />
          </div>

          <div className="entry-elements">
            <label htmlFor="permanentAddress">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              id="permanentAddress"
              autoComplete="off"
              value={formData.permanentAddress}
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
            <button type="submit" disabled={submitting}>
              REGISTER
            </button>
          </div>
        </form>

        <div className="entry-message">
          <p>Already have account?</p>
          <Link to="/login">Click Here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
