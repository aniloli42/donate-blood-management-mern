import React from "react"
import HistoryAction from "../HistoryAction/HistoryAction"

const InputData = ({ date, location, remarks, id }) => {
	return (
		<div className='history-data' id={id ? id : ""}>
			<div>{date ? date : ""}</div>
			<div>{location ? location : ""}</div>
			<div>{remarks ? remarks : ""}</div>
			<div>
				<HistoryAction />
			</div>
		</div>
	)
}

export default InputData
