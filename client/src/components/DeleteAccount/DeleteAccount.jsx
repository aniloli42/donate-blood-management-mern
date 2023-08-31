import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteAccount } from './../../actions/Auth'
import { displayMessage } from './../../actions/Message'
import { passwordValidation } from './../../validation/index'

const DeleteAccount = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [formData, setFormData] = useState({ password: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = e => {
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleDeleteAccount = async e => {
    e.preventDefault()
    setSubmitting(true)

    try {
      if (formData.password === '') {
        setSubmitting(false)

        return dispatch(displayMessage('Enter Password'))
      }

      const validPassword = passwordValidation(formData.password)

      if (!validPassword.status) {
        setSubmitting(false)
        return dispatch(displayMessage(validPassword.message))
      }

      await dispatch(deleteAccount(formData, history))
      setSubmitting(false)
    } catch (err) {
      setSubmitting(false)
      dispatch(displayMessage(err.message))
    }
  }

  return (
    <form method="post" onSubmit={handleDeleteAccount}>
      <div className="input-group">
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="button" disabled={submitting}>
          Delete Account
        </button>
      </div>
    </form>
  )
}

export default DeleteAccount
