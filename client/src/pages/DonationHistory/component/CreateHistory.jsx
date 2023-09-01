import React, { useEffect, useState } from 'react'

import { createHistory, updateHistory } from '../../../actions/History'
import { removeHistory } from '../../../actions/manageHistory'
import { displayMessage } from '../../../actions/Message'
import Popup from '../../../components/Popup/Popup'
import { stringValidation } from '../../../validation'
import Card from './Card'

import { useDispatch, useSelector } from 'react-redux'

const CreateHistory = ({ func }) => {
  const dispatch = useDispatch()
  const history = useSelector(state => state.manageHistory)

  const [formData, setFormData] = useState({
    donatedAt: '',
    location: '',
    remarks: ''
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!history.status) return
    history.history.donatedAt = new Date(history.history.donatedAt)
      .toISOString()
      .substring(0, 10)

    setFormData(prev => {
      return {
        ...prev,
        ...history.history
      }
    })
  }, [history])

  const handleChange = e => {
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleHistoryCreate = async e => {
    e.preventDefault()
    setSubmitting(true)
    try {
      if (!stringValidation(formData.location)) {
        setSubmitting(false)
        dispatch(displayMessage('Invalid Location'))
        return
      }

      const donatedAt = new Date(formData.donatedAt).toISOString()

      dispatch(createHistory({ ...formData, donatedAt: donatedAt })).then(
        () => {
          setSubmitting(false)
          func()
        }
      )
    } catch (error) {
      setSubmitting(false)
      console.error(error.message)
      dispatch(displayMessage(error.message))
    }
  }

  const handleHistoryUpdate = async e => {
    e.preventDefault()
    setSubmitting(true)
    try {
      if (!stringValidation(formData.location)) {
        setSubmitting(false)
        dispatch(displayMessage('Invalid Location'))
        return
      }

      const donatedAt = new Date(formData.donatedAt).toISOString()

      dispatch(
        updateHistory({ ...formData, donatedAt: donatedAt }, formData._id)
      ).then(() => {
        setSubmitting(true)
        func()
      })
    } catch (error) {
      dispatch(displayMessage(error.message))
    }
  }

  return (
    <Popup
      title={history.status ? 'Edit History' : 'Create History'}
      func={() => {
        dispatch(removeHistory())
        func()
      }}
    >
      <form>
        <Card
          label="Donated At"
          value={formData.donatedAt}
          name="donatedAt"
          type="date"
          handleChange={handleChange}
          required
        />
        <Card
          label="Location"
          value={formData.location}
          name="location"
          type="text"
          handleChange={handleChange}
          required
        />
        <Card
          label="Remarks"
          value={formData.remarks}
          name="remarks"
          type="text"
          handleChange={handleChange}
        />
        <div className="button-group">
          {!history.status ? (
            <button
              type="submit"
              className="button"
              onClick={handleHistoryCreate}
              disabled={submitting}
            >
              Create
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="button"
                onClick={handleHistoryUpdate}
                disabled={submitting}
              >
                Update
              </button>
            </>
          )}
        </div>
      </form>
    </Popup>
  )
}

export default CreateHistory
