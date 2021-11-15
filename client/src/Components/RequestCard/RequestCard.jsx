import React from "react"
import { ButtonGroup } from ".."
import "./requestcard.css"

// import { Link } from "react-router-dom"

const RequestCard = ({ bloodtype, requestname, address, id, edit }) => {
	return (
		<div className='recent-content' id={id}>
			<div className='text-badge'>{bloodtype}</div>
			<div className='request-name'>
				{requestname}
				<small>(9806242024)</small>
			</div>
			<div className='request-address'>
				{"2 min ago"} . ({address})
			</div>
			{!edit ? (
				<a className='request-view' href={`tel:9806242024`}>
					Call
				</a>
			) : (
				<div className='request-view-group'>
					<ButtonGroup />
				</div>
			)}
		</div>
	)
}

export default RequestCard
