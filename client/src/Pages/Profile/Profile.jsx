import React, { useState } from "react"
import defaultProfileImage from "./../../Assets/Images/profile-image.png"
import "./profile.css"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing((prev) => !prev)
  }

  return (
    <>
      {/* section title */}
      <h2>Profile</h2>

      <div className="profile-container">
        <div className="profile-image">
          <img src={defaultProfileImage} alt="" />
          {isEditing && (
            <button id="profileImageUpdater" className="profile-image-updater">
              Update Image
            </button>
          )}
        </div>
        <div className="profile-info">
          {/* Profile Name */}
          <div className="profile-name input-group">
            <label htmlFor="profileName">Name</label>
            {isEditing ? (
              <input type="text" id="profileName" name="profileName" />
            ) : (
              <p>Anil Oli</p>
            )}
          </div>

          {/* Blood Type */}
          <div className="input-group profile-blood-type">
            <label htmlFor="profileBloodType">Blood Type</label>
            {isEditing ? (
              <select name="profileBloodType" id="profileBloodType">
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            ) : (
              <p>B+</p>
            )}
          </div>

          {/* Temporary Address */}
          <div className="input-group profile-temporary-address">
            <label htmlFor="profileTemporaryAddress">Temporary Address</label>
            {isEditing ? (
              <input
                type="text"
                name="profileTemporaryAddress"
                id="profileTemporaryAddress"
              />
            ) : (
              <p>Devinagar-11,Butwal</p>
            )}
          </div>

          {/* Permanent Addess */}
          <div className="input-group profile-permanent-address">
            <label htmlFor="profilePermanentAddress">Permanent Address</label>
            {isEditing ? (
              <input
                type="text"
                name="profilePermanentAddress"
                id="profilePermanentAddress"
              />
            ) : (
              <p>Gadhawa Rural Municipality 6, Dang</p>
            )}
          </div>
        </div>
      </div>
      <div className="input-buttons">
        {isEditing ? (
          <>
            <button
              onClick={toggleEdit}
              type="submit"
              className="button profile-update"
              id="profileUpdate"
            >
              Update
            </button>
            <button
              onClick={toggleEdit}
              className="button cancel-update"
              id="cancelUpdate"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={toggleEdit}
            className="button profile-edit"
            id="profileEdit"
          >
            Edit
          </button>
        )}
      </div>
    </>
  )
}

export default Profile
