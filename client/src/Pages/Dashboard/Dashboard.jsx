import React /* useEffect, useState  */ from "react"
import { Link } from "react-router-dom"
import { Badge, RequestCard } from "../../Components"
import "./dashboard.css"
import MainComponent from "../MainComponent/MainComponent"
import { useSelector } from "react-redux"

const Dashboard = () => {
	const profile = useSelector((state) => state.Profile)

	return (
		<MainComponent>
			<h2>Dashboard</h2>

			<div className='small-cards'>
				<Badge
					badgetitle='Blood Group'
					badgetext={profile?.bloodType} /* {profile && profile.bloodType} */
				/>
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
					<RequestCard
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
					/>
				</div>
			</article>
		</MainComponent>
	)
}

export default Dashboard
