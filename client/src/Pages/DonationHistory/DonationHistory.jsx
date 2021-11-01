import React from "react"
import HistoryAction from "../../Components/HistoryAction/HistoryAction"
import "./donationhistory.css"

const DonationHistory = () => {
	return (
		<>
			<header>
				<h2>Donation history</h2>
				<button className="button">Add New</button>
			</header>
			<hr />

			<div className="history-container">
				<div className="history-table">
					{/* History Headers */}
					<div className="history-headers">
						<div className="history-header">Date</div>
						<div className="history-header">Place</div>
						<div className="history-header">Remarks</div>
						<div className="history-header">Actions</div>
					</div>

					{/* History Data */}
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
					<div className="history-data">
						<div>2078/04/08</div>
						<div>Lamahi Blood Center</div>
						<div>-</div>
						<div>
							<HistoryAction />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DonationHistory
