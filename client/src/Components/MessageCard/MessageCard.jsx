import React, { useEffect, useRef } from "react"
import "./messagecard.css"

const MessageCard = ({ toggleMessage }) => {
	const messageDiv = useRef(null)

	useEffect(() => {
		fadein()
	}, [])

	const fadein = () => {
		messageDiv.current.style.display = "grid"
		messageDiv.current.style.opacity = "0"
		setTimeout(() => {
			messageDiv.current.style.bottom = `10px`
			messageDiv.current.style.opacity = "1"
		}, 600)
	}

	const fadeOut = () => {
		messageDiv.current.style.bottom = `0px`
		messageDiv.current.style.opacity = `0`
		toggleMessage()
	}

	return (
		<div className='message-container'>
			<p className='message-div-text'>Login Successfully!</p>
			<button
				className='message-button-dismiss'
				ref={messageDiv}
				onClick={fadeOut}
			>
				<i className='fas fa-times-circle fa-lg'></i>
			</button>
		</div>
	)
}

export default MessageCard
