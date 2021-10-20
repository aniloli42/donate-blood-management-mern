import React from 'react'
import defaultProfileImage from "./../../Assets/Images/profile-image.png"

const Profile = () => {
  return (
    <>
      {/* section title */}
      <h2>Profile</h2>

      <div className="profile-container">
        <div className="profile-image">
          <img src={defaultProfileImage} alt="" />
          {/* TODO: change true to isLogin Variable */}
          {true && <button id="profileImageUpdater">Update Image</button>}
        </div>

        <div className="profile-info">
          <div className="profile-name input-group">
            <label htmlFor="profileName">Name</label>
            <input type="text" id="profileName" name="profileName" />
          </div>

          <div className="input-group profile-blood-type">input</div>
        </div>
      </div>
    </>
  )
}

export default Profile
