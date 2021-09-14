import React, { useCallback } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {

	const location = useLocation().pathname.split("/")[1]


    const handleSidebarElementClick = useCallback((e)=>{
        document.querySelector('#sidebar').classList.remove('active')
        document.querySelector('.hamburger-lines').classList.remove('active')
    },[])

	return (
		<div className="sidebar-div" id="sidebar">
			<Link to="/" className={`sidebar-element ${location === "" && "active" }`} onClick={handleSidebarElementClick}>
            <i className="fas fa-home"></i>
				<p>Dashboard</p>
			</Link>
            <Link to="/profile" className={`sidebar-element ${location === "profile" && "active" }`} onClick={handleSidebarElementClick}>
            <i className="fas fa-id-badge"></i>
			<p>Profile</p>
			</Link>
			<Link to="/donation-history" className={`sidebar-element ${location === "donation-history" && "active" }`} onClick={handleSidebarElementClick}>
            <i className="fas fa-hand-holding-medical"></i>
				<p>Donation History</p>
			</Link>
			<Link to="/requests" className={`sidebar-element ${location === "requests" && "active" }`} onClick={handleSidebarElementClick}>
            <i className="fas fa-hands-helping"></i>
				<p>Requests</p>
			</Link>
			<Link to="/logout" className="sidebar-element" onClick={handleSidebarElementClick}>
            <i className="fas fa-sign-out-alt"></i>
				<p>Logout</p>
			</Link>
		</div>
	)
}

export default Sidebar
