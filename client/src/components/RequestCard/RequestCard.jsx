import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonGroup } from '..'
import { displayLoader } from '../../actions/Loader'
import { getRequest } from '../../actions/manageRequest'
import { deleteRequest } from '../../actions/Request'
import './requestcard.css'

const RequestCard = ({ request, changePopup, edit }) => {
  const dispatch = useDispatch()

  const {
    _id: id,
    requestedAt: time,
    bloodType,
    location,
    name: requestName,
    phone,
  } = request

  const editHandler = () => {
    dispatch(displayLoader(true))
    dispatch(getRequest(id))
    changePopup()
    dispatch(displayLoader(false))
  }

  const deleteHandler = () => {
    dispatch(displayLoader(true))
    dispatch(deleteRequest(id))
    dispatch(displayLoader(false))
  }

  return (
    <div className="recent-content">
      <div className="text-badge">{bloodType}</div>
      <div className="request-name">
        {requestName}
        <small>{phone}</small>
      </div>
      <div className="request-address">
        {moment(time).fromNow()} . {location}
      </div>
      {!edit ? (
        <a className="request-view" href={`tel:${phone}`}>
          Call
        </a>
      ) : (
        <div className="request-view-group">
          <ButtonGroup editFunc={editHandler} deleteFunc={deleteHandler} />
        </div>
      )}
    </div>
  )
}

export default RequestCard
