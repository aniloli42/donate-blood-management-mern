import React from "react"
import { useDispatch } from "react-redux"
import { ButtonGroup } from ".."
import { deleteHistory } from "../../Actions/History"
import { getHistory } from "../../Actions/manageHistory"

const HistoryCard = ({ date, location, remarks, id, func }) => {
	const dispatch = useDispatch()
	return (
		<div className='history-data' id={id}>
			<div>{date ? date : ""}</div>
			<div>{location ? location : ""}</div>
			<div>{remarks ? remarks : ""}</div>
			<div>
				<ButtonGroup
					editFunc={() => {
						dispatch(getHistory(id))
						func()
					}}
					deleteFunc={() => dispatch(deleteHistory(id))}
				/>
			</div>
		</div>
	)
}

export default HistoryCard
