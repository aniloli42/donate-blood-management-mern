import React /* useEffect, useState  */ from "react"
import { Link } from "react-router-dom"
import { Badge, RecentRequest } from "../../Components"
import "./dashboard.css"
import MainComponent from "../MainComponent/MainComponent"

// import { useDispatch, useSelector } from "react-redux"
// import { fetchData } from "../../Actions/Data"

const Dashboard = () => {
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(fetchData(profile._id))
	// }, [dispatch, profile._id])

	return (
		<MainComponent>
			<h2>Dashboard</h2>

			<div className='small-cards'>
				<Badge
					badgetitle='Blood Group'
					badgetext='B+' /* {profile && profile.bloodType} */
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
		</MainComponent>
	)
}

export default Dashboard
