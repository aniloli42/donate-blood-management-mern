import React, { useCallback } from "react"
import { useLocation } from "react-router"
import { Link, useHistory } from "react-router-dom"
import "./sidebar.css"
import { useDispatch } from "react-redux"
import { logout } from "../../Actions/Auth"

const Sidebar = () => {
	const location = useLocation().pathname.split("/")[1]
	const dispatch = useDispatch()
	const history = useHistory()

	const handleSidebarElementClick = useCallback((e) => {
		// check if user click in sidebar content rather than sidebar options and prevent it
		e?.stopPropagation()

		if (e?.target?.className === "sidebar-content") return

		// remove the classname to hide the sidebar
		document.querySelector("#sidebar").classList.remove("active")
		document.querySelector(".hamburger-lines").classList.remove("active")
	}, [])

	const handleLogout = () => {
		handleSidebarElementClick()
		dispatch(logout(history))
	}

	return (
		<div
			className="sidebar-div backlayer"
			id="sidebar"
			onClick={handleSidebarElementClick}
		>
			<div className="sidebar-content">
				<Link
					to="/"
					className={`sidebar-element ${location === "" ? "active" : ""}`}
					onClick={handleSidebarElementClick}
				>
					<i className="fas fa-home"></i>
					<p>Dashboard</p>
				</Link>
				<Link
					to="/profile"
					className={`sidebar-element ${
						location === "profile" ? "active" : ""
					}`}
					onClick={handleSidebarElementClick}
				>
					<i className="fas fa-id-badge"></i>
					<p>Profile</p>
				</Link>
				<Link
					to="/security"
					className={`sidebar-element ${
						location === "security" ? "active" : ""
					}`}
					onClick={handleSidebarElementClick}
				>
					<i className="fas fa-shield-alt"></i>
					<p>Security</p>
				</Link>
				<Link
					to="/donation-history"
					className={`sidebar-element ${
						location === "donation-history" ? "active" : ""
					}`}
					onClick={handleSidebarElementClick}
				>
					<i className="fas fa-hands-helping"></i>
					<p>Donation History</p>
				</Link>
				<Link
					to="/requests"
					className={`sidebar-element ${
						location === "requests" ? "active" : ""
					}`}
					onClick={handleSidebarElementClick}
				>
					<i className="fas fa-hand-holding-medical"></i>
					<p>Requests</p>
				</Link>
				<div className="sidebar-element" onClick={handleLogout}>
					<i className="fas fa-sign-out-alt"></i>
					<p>Logout</p>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
