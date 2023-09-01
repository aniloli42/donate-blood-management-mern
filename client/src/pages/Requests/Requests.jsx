import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainComponent } from '..'
import { setOtherRequest, setOwnRequest } from '../../actions/Request'
import { RequestCard } from '../../components'
import handleOverflow from '../../utils/hideOverFlow'
import CreateRequest from './component/CreateRequest'
import './requests.css'

const Requests = () => {
  const dispatch = useDispatch()
  const requests = useSelector(state => state.Request)
  const [popup, setPopup] = useState(false)

  const changePopup = () => {
    setPopup(prev => !prev)
    handleOverflow(!popup)
  }

  useEffect(() => {
    dispatch(setOwnRequest())
    dispatch(setOtherRequest())
  }, [dispatch])

  return (
    <MainComponent>
      {popup && <CreateRequest func={changePopup} />}
      <h2>Requests</h2>
      <section className="own-requests">
        <header>
          <h2>Own Requests</h2>
          <button className="button" onClick={changePopup}>
            Add New
          </button>
        </header>
        <hr />
        <div className="requests-content own-requests-content">
          {requests?.ownRequest !== 0 &&
            requests?.ownRequest?.map(request => {
              return (
                <RequestCard
                  key={request._id}
                  request={request}
                  changePopup={changePopup}
                  edit
                />
              )
            })}

          {!requests?.ownRequest?.length && (
            <div className="message">No Any Requests Done Yet.</div>
          )}
        </div>
      </section>
      <section className="other-requests">
        <header>
          <h2>Other Requests</h2>
          <button
            className="button button-center"
            onClick={() => dispatch(setOtherRequest())}
          >
            Refresh
          </button>
        </header>
        <hr />
        <div className="requests-content other-requests-content">
          {requests?.otherRequest?.map(request => {
            return (
              <RequestCard
                key={request._id}
                request={request}
                changePopup={changePopup}
              />
            )
          })}

          {!requests?.otherRequest?.length && (
            <div className="message">No Any Requests Found.</div>
          )}
        </div>
      </section>
    </MainComponent>
  )
}

export default Requests
