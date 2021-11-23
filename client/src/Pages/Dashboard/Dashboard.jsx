import React, { useEffect /* useEffect, useState  */ } from "react"
import { Link } from "react-router-dom"
import { Badge, RequestCard } from "../../Components"
import "./dashboard.css"
import MainComponent from "../MainComponent/MainComponent"
import { useDispatch, useSelector } from "react-redux"
import { setRecentRequest } from "../../Actions/Request"
import { getStatus } from "../../Actions/Status"

const Dashboard = () => {
	const dispatch = useDispatch()
	const profile = useSelector((state) => state.Profile)
	const status = useSelector((state) => state.Status)
	const Request = useSelector((state) => state.Request)

	useEffect(() => {
		dispatch(getStatus())
		dispatch(setRecentRequest())
	}, [dispatch])

	return (
		<MainComponent>
			<h2>Dashboard</h2>

			<div className='small-cards'>
				<Badge badgetitle='Blood Group' badgetext={profile?.bloodType} />
				<Badge badgetitle='Total Donation' badgetext={status?.historyCount} />
				<Badge badgetitle='Total Requests' badgetext={status?.requestCount} />
				<Badge badgetitle='Pending Requests' badgetext={status?.pendingCount} />
			</div>

			<article className='recent-container'>
				<header>
					<h2>Recent Requests</h2>
					<Link className='view-all-action-button' to='/requests'>
						View All Requests
					</Link>
				</header>

				<div className='recent-contents'>
					{Request?.recentRequest !== 0 &&
						Request?.recentRequest?.map((request, index) => {
							return (
								<RequestCard
									key={index}
									time={request.requestedAt}
									bloodtype={request.bloodType}
									address={request.location}
									requestname={request.name}
									id={request._id}
								/>
							)
						})}

					{Request?.recentRequest?.length === 0 && (
						<div className='message'>No Any Requests Found.</div>
					)}
				</div>
			</article>
		</MainComponent>
	)
}

export default Dashboard
