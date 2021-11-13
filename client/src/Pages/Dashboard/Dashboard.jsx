import React from "react"
import { Link } from "react-router-dom"
import { Badge, RecentRequest } from "../../Components"
import "./dashboard.css"

const Dashboard = () => {
	return (
		<>
			<h2>Dashboard</h2>

			<div className='small-cards'>
				<Badge badgetitle='Blood Group' badgetext='B+' />
				<Badge badgetitle='Total Donation' badgetext='8' />
				<Badge badgetitle='Total Requests' badgetext='8' />
				<Badge badgetitle='Pending Requests' badgetext='3' />
			</div>

			<article className='recent-container'>
				<header>
					<h2>Recent Requests</h2>
					<Link className='view-all-action-button' to='/requests'>
						View All Requests
					</Link>
				</header>

				<div className='recent-contents'>
					<RecentRequest
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
					/>
					<RecentRequest
						bloodtype={"B+"}
						address={"Dang"}
						requestname='Anil Oli'
						id={2}
					/>
					<RecentRequest
						bloodtype={"B+"}
						address={"Dang"}
						requestname='Shovit Banjade'
						id={3}
					/>
				</div>
			</article>
		</>
	)
}

export default Dashboard
