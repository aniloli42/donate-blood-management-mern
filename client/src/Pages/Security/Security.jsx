import React, { useState } from "react"
import { useSelector } from "react-redux"

import "./security.css"

import Popup from "../../Components/Popup/Popup"
import ChangeEmail from "./../../Components/ChangeEmail/ChangeEmail"
import DeleteAccount from "./../../Components/DeleteAccount/DeleteAccount"
import { MainComponent } from ".."

const Security = () => {
	const profile = useSelector((state) => state.Profile)

	const [isEmailChangePopup, setEmailChangePopup] = useState(false)
	const [isDeleteAccountPopup, setDeleteAccountPopup] = useState(false)

	const popupEmail = (e) => {
		setEmailChangePopup((prevState) => !prevState)
	}

	const popupAccount = (e) => {
		setDeleteAccountPopup((prevState) => !prevState)
	}

	return (
		<MainComponent>
			{/* Popup Email Change */}

			{isEmailChangePopup && (
				<>
					<Popup title='Change Email' func={popupEmail}>
						<ChangeEmail />
					</Popup>
				</>
			)}

			{/* Popup Delete Account */}

			{isDeleteAccountPopup && (
				<>
					<Popup title='Delete Account' func={popupAccount}>
						<DeleteAccount />
					</Popup>
				</>
			)}

			<h2>Security</h2>

			<section>
				<h3>Email</h3>
				<hr />
				<div className='email-content'>
					<p>Your Email</p>
					<p>{profile?.email}</p>
					<button onClick={popupEmail}>
						<i className='fas fa-pen'></i>
					</button>
				</div>
			</section>

			<section>
				<h3>Change Password</h3>
				<hr />
				<form>
					<div className='input-group'>
						<label htmlFor='oldPassword'>Old Password</label>
						<input type='password' id='oldPassword' name='oldPassword' />
					</div>

					<div className='input-group'>
						<label htmlFor='newPassword'>New Password</label>
						<input type='password' id='newPassword' name='newPassword' />
					</div>

					<div className='input-group'>
						<label htmlFor='retypePassword'>Retype Password</label>
						<input type='password' id='retypePassword' name='retypePassword' />
					</div>
					<div className='input-buttons'>
						<button type='submit'>Change Password</button>
						<button>Forget Password?</button>
					</div>
				</form>
			</section>

			{/* delete account */}
			<section className='delete-account-section'>
				<h3>Danger Zone !</h3>
				<hr />

				<button onClick={popupAccount}>Delete Account</button>
			</section>
		</MainComponent>
	)
}

export default Security
