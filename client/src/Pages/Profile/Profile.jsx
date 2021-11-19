import React, { useState } from "react"
import "./profile.css"
import { useSelector } from "react-redux"
import { MainComponent } from ".."

const Profile = () => {
	const profile = useSelector((state) => state.Profile)

	const [isEditing, setIsEditing] = useState(false)

	const toggleEdit = () => {
		setIsEditing((prev) => !prev)
	}

	return (
		<MainComponent>
			{/* section title */}
			<h2>Profile</h2>

			<div className='profile-container'>
				<div className='profile-info'>
					{/* Profile Name */}
					<div className='profile-name input-group'>
						<label htmlFor='profileName'>Name</label>
						{isEditing ? (
							<input
								type='text'
								id='profileName'
								name='profileName'
								defaultValue={profile?.name ? profile.name : ""}
							/>
						) : (
							<p>{profile?.name ? profile.name : "-"}</p>
						)}
					</div>

					{/* Blood Type */}
					<div className='input-group profile-blood-type'>
						<label htmlFor='profileBloodType'>Blood Type</label>
						{isEditing ? (
							<select
								name='profileBloodType'
								id='profileBloodType'
								defaultValue={profile?.bloodType ? profile.bloodType : "O+"}
							>
								<option value='O+'>O+</option>
								<option value='O-'>O-</option>
								<option value='A+'>A+</option>
								<option value='A-'>A-</option>
								<option value='B+'>B+</option>
								<option value='B-'>B-</option>
								<option value='AB+'>AB+</option>
								<option value='AB-'>AB-</option>
							</select>
						) : (
							<p>{profile?.bloodType ? profile.bloodType : "O+"}</p>
						)}
					</div>

					{/* Temporary Address */}
					<div className='input-group profile-temporary-address'>
						<label htmlFor='profileTemporaryAddress'>Temporary Address</label>
						{isEditing ? (
							<input
								type='text'
								name='profileTemporaryAddress'
								id='profileTemporaryAddress'
								defaultValue={
									profile?.temporaryAddress ? profile.temporaryAddress : ""
								}
							/>
						) : (
							<p>
								{profile?.temporaryAddress ? profile.temporaryAddress : "-"}
							</p>
						)}
					</div>

					{/* Permanent Addess */}
					<div className='input-group profile-permanent-address'>
						<label htmlFor='profilePermanentAddress'>Permanent Address</label>
						{isEditing ? (
							<input
								type='text'
								name='profilePermanentAddress'
								id='profilePermanentAddress'
								defaultValue={
									profile?.permanentAddress ? profile.permanentAddress : ""
								}
							/>
						) : (
							<p>
								{profile?.permanentAddress ? profile.permanentAddress : "-"}
							</p>
						)}
					</div>
				</div>
			</div>
			<div className='input-buttons'>
				{isEditing ? (
					<>
						<button
							onClick={toggleEdit}
							type='submit'
							className='button profile-update'
							id='profileUpdate'
						>
							Update
						</button>
						<button
							onClick={toggleEdit}
							className='button cancel-update'
							id='cancelUpdate'
						>
							Cancel
						</button>
					</>
				) : (
					<button
						onClick={toggleEdit}
						className='button profile-edit'
						id='profileEdit'
					>
						Edit
					</button>
				)}
			</div>
		</MainComponent>
	)
}

export default Profile
