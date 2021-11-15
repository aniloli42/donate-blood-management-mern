import React from "react"
import { ButtonGroup } from ".."

const HistoryCard = ({ date, location, remarks, id }) => {
	return (
		<div className='history-data' id={id ? id : ""}>
			<div>{date ? date : ""}</div>
			<div>{location ? location : ""}</div>
			<div>{remarks ? remarks : ""}</div>
			<div>
				<ButtonGroup />
			</div>
		</div>
	)
}

export default HistoryCard
