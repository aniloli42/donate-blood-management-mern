import React from "react"
import { MainComponent } from ".."
import { InputData } from "../../Components"
import "./donationhistory.css"

const DonationHistory = () => {
	return (
		<MainComponent>
			<header>
				<h2>Donation history</h2>
				<button className='button'>Add New</button>
			</header>
			<hr />

			<div className='history-container'>
				<div className='history-table'>
					{/* History Headers */}
					<div className='history-headers'>
						<div className='history-header'>Date</div>
						<div className='history-header'>Place</div>
						<div className='history-header'>Remarks</div>
						<div className='history-header'>Actions</div>
					</div>

					{/* History Data */}
					<InputData date='2078/2/5' location='gadhawa' remarks='-' id='-' />
				</div>
			</div>
		</MainComponent>
	)
}

export default DonationHistory
