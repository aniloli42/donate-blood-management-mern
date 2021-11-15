import React from "react"
import { MainComponent } from ".."
import { RequestCard } from "../../Components"
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
					<RequestCard
						bloodtype={"B+"}
						address={"Dang"}
						requestname='Shovit Banjade'
						id={3}
						edit
					/>
					<RequestCard
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
						edit
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
					<RequestCard
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
					/>
					<RequestCard
						bloodtype={"B+"}
						address={"Dang"}
						requestname='Anil Oli'
						id={2}
					/>
					<RequestCard
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
					/>
					<RequestCard
						bloodtype={"B+"}
						address={"Dang"}
						requestname='Anil Oli'
						id={2}
					/>
					<RequestCard
						bloodtype={"O+"}
						address={"butwal"}
						requestname='Sanjay'
						id={1}
					/>
					<RequestCard
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
