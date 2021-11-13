import React from "react"
import "./recentrequest.css"

import { Link } from "react-router-dom"

const RecentRequest = ({ bloodtype, requestname, address, id }) => {
	return (
		<div className='recent-content'>
			<div className='text-badge'>{bloodtype}</div>
			<div className='request-name'>{requestname}</div>
			<div className='request-address'>{address}</div>
			<Link className='request-view' to={`/${id}`}>
				View
			</Link>
		</div>
	)
}

export default RecentRequest
