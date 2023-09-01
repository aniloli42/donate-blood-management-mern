import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { displayMessage } from '../../../actions/Message'
import { changeForgetPassword } from '../../../api/API'
import hide from '../../../assets/images/eye-off.svg'
import show from '../../../assets/images/eye.svg'
import { passwordValidation } from '../../../validation'

const ChangePassword = ({ email }) => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const password = useRef(null)
  const retypepassword = useRef(null)
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    newpassword: '',
    retypepassword: ''
  })

  const changePasswordType = e => {
    if (password.current.type === 'password') {
      e.target.src = hide
      password.current.type = 'text'
      retypepassword.current.type = 'text'
      return
    }
    e.target.src = show
    password.current.type = 'password'
    retypepassword.current.type = 'password'
    return
  }

  const updateFormData = e => {
    setFormData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handlePassword = async e => {
    e.preventDefault()
    setSubmitting(true)

    if (formData.newpassword !== formData.retypepassword) {
      setSubmitting(false)
      dispatch(displayMessage('Password Not Matched'))
      return
    }

    const isMatch = passwordValidation(formData.newpassword)

    if (!isMatch.status) {
      setSubmitting(false)
      dispatch(displayMessage(isMatch.message))
      return
    }

    try {
      const { data } = await changeForgetPassword({
        password: formData.newpassword,
        email
      })

      const { message } = await data

      setSubmitting(false)
      dispatch(displayMessage(message))
      history('/login')
    } catch (error) {
      const message = error?.response?.data?.message ?? 'Something Went Wrong!'

      setSubmitting(false)
      dispatch(displayMessage(message))
    }
  }

  return (
    <div className="entry-form-div">
      <form className="entry-form" method="post" onSubmit={handlePassword}>
        <h2>Change Password</h2>

        <div className="entry-elements">
          <label htmlFor="newpassword">New Password</label>
          <div className="group-entry-element">
            <input
              type="password"
              name="newpassword"
              ref={password}
              id="newpassword"
              value={formData.newpassword}
              onChange={updateFormData}
              autoComplete="off"
            />
            <img src={show} alt="show hide icon" onClick={changePasswordType} />
          </div>
        </div>

        <div className="entry-elements">
          <label htmlFor="retypepassword">Retype Password</label>
          <input
            type="password"
            name="retypepassword"
            ref={retypepassword}
            value={formData.retypepassword}
            onChange={updateFormData}
            id="retypepassword"
            autoComplete="off"
          />
        </div>

        <div className="entry-button">
          <button type="submit" disabled={submitting}>
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
