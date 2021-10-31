import React from "react"
import "./popup.css"

const Popup = ({ title, children, func }) => {
	const hidePopup = (e) => {
		e.stopPropagation()

		if (!(e.target.className === "popup-container")) return
		func()
	}

	return (
		<>
			<div className="popup-container" onClick={hidePopup}>
				<div className="popup-content">
					<h2>{title}</h2>
					<hr />
					{children}
				</div>
			</div>
		</>
	)
}

export default Popup
