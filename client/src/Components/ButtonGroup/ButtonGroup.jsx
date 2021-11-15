import React from "react"
import "./buttongroup.css"

const ButtonGroup = () => {
	return (
		<>
			<button className='button action-button action-edit'>
				<i className='fas fa-pen'></i>
			</button>

			<button className='button action-button action-delete'>
				<i className='fas fa-trash-alt'></i>
			</button>
		</>
	)
}

export default ButtonGroup
