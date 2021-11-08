import React, { useEffect, useRef } from "react"
import "./messagecard.css"

import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../../Actions/Message"

const MessageCard = () => {
	const messageDiv = useRef(null)
	const dispatch = useDispatch()
	const { message, status } = useSelector((state) => state.Message)

	useEffect(() => {
		if (message === null) return
		fadein()

		if (status === true) {
			setTimeout(() => {
				fadeOut()
			}, 1500)
		}

		// eslint-disable-next-line
	}, [status, dispatch, message])

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
		messageDiv.current.style.opacity = "0"
		setTimeout(() => {
			messageDiv.current.style.display = `none`

			dispatch(clearMessage())
		}, 600)
	}

	return (
		<div className='message-container' ref={messageDiv}>
			<p className='message-div-text'>{message}</p>
			<button className='message-button-dismiss' onClick={fadeOut}>
				<i className='fas fa-times-circle fa-lg'></i>
			</button>
		</div>
	)
}

export default MessageCard
