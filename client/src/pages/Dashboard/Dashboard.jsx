import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setRecentRequest } from '../../actions/Request'
import { getStatus } from '../../actions/Status'
import { Badge, RequestCard } from '../../components'
import MainComponent from '../MainComponent/MainComponent'
import './dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.Profile)
  const Auth = useSelector(state => state.Auth)
  const status = useSelector(state => state.Status)
  const Request = useSelector(state => state.Request)

  useEffect(() => {
    if (!Auth?.isAuth) return
    dispatch(getStatus())
    dispatch(setRecentRequest())
  }, [Auth, dispatch])

  return (
    <MainComponent>
      <h2>Dashboard</h2>

      <div className="small-cards">
        <Badge badgetitle="Blood Group" badgetext={profile?.bloodType} />
        <Badge badgetitle="Total Donation" badgetext={status?.historyCount} />
        <Badge badgetitle="Total Requests" badgetext={status?.requestCount} />
        <Badge badgetitle="Pending Requests" badgetext={status?.pendingCount} />
      </div>

      <article className="recent-container">
        <header>
          <h2>Recent Requests</h2>
          <Link className="view-all-action-button" to="/requests">
            View All Requests
          </Link>
        </header>

        <div className="recent-contents">
          {Request?.recentRequest !== 0 &&
            Request?.recentRequest?.map(request => {
              return <RequestCard key={request._id} request={request} />
            })}

          {Request?.recentRequest?.length === 0 && (
            <div className="message">No Any Requests Found.</div>
          )}
        </div>
      </article>
    </MainComponent>
  )
}

export default Dashboard
