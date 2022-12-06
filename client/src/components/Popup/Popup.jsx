import React from "react"
import "./popup.css"

const Popup = ({ title, children, func }) => {
	return (
		<>
			<div className='popup-container'>
				<div className='popup-content'>
					<div className='popup-header'>
						<h2>{title}</h2>
						<div className='popup-dismiss' onClick={func}>
							<i className='fa fa-times'></i>
						</div>
					</div>
					<hr />
					{children}
				</div>
			</div>
		</>
	)
}

export default Popup
