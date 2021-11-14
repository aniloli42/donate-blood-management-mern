import React from "react"
import { MainComponent } from ".."
import { RecentRequest } from "../../Components"
import "./requests.css"

const Requests = () => {
	return (
		<MainComponent>
			<h2>Requests</h2>
			<section className='own-requests'>
				<header>
					<h2>Own Requests</h2>
					<button className='button'>Add New</button>
				</header>
				<hr />
				<div className='requests-content own-requests-content'>
					<RecentRequest
						bloodtype={"B+"}
						address={"Dang"}
						requestname='Shovit Banjade'
						id={3}
					/>
					<RecentRequest
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
					/>
				</div>
			</section>

			<section className='other-requests'>
				<header>
					<h2>Other Requests</h2>
					<button className='button'>View All</button>
				</header>
				<hr />
				<div className='requests-content other-requests-content'>
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
				</div>
			</section>
		</MainComponent>
	)
}

export default Requests
