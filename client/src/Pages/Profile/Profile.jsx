import React, { useState, useEffect } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { MainComponent } from "..";

import { updateProfile } from "../../Actions/Profile";
import { displayMessage } from "../../Actions/Message";
import { nameValidation, stringValidation } from "../../Validation";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.Profile);

  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState(profile);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleProfileChange = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!nameValidation(formData.name)) {
      setSubmitting(false);
      dispatch(displayMessage("Invalid Name"));
      return;
    }

    if (!stringValidation(formData.temporaryAddress)) {
      setSubmitting(false);
      dispatch(displayMessage("Invalid Temporary Address"));
      return;
    }

    if (!stringValidation(formData.permanentAddress)) {
      setSubmitting(false);
      dispatch(displayMessage("Invalid Permanent Address"));
      return;
    }

    try {
      dispatch(updateProfile(formData, toggleEdit, setSubmitting));
    } catch (error) {
      setSubmitting(false);
      console.error(error.message);
      dispatch(displayMessage(error.message));
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <MainComponent>
      {/* section title */}
      <h2>Profile</h2>

      <div className="profile-container">
        <div className="profile-info">
          {/* Profile Name */}
          <div className="profile-name input-group">
            <label htmlFor="profileName">Name</label>
            {isEditing ? (
              <input
                type="text"
                id="profileName"
                name="name"
                value={formData?.name}
                onChange={handleChange}
              />
            ) : (
              <p>{profile?.name ? profile.name : "-"}</p>
            )}
          </div>

          {/* Blood Type */}
          <div className="input-group profile-blood-type">
            <label htmlFor="profileBloodType">Blood Type</label>
            {isEditing ? (
              <select
                name="bloodType"
                value={formData?.bloodType}
                onChange={handleChange}
              >
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
              <p>{profile?.bloodType ? profile.bloodType : "O+"}</p>
            )}
          </div>

          {/* Temporary Address */}
          <div className="input-group profile-temporary-address">
            <label htmlFor="profileTemporaryAddress">Temporary Address</label>
            {isEditing ? (
              <input
                type="text"
                name="temporaryAddress"
                value={formData?.temporaryAddress}
                onChange={handleChange}
              />
            ) : (
              <p>
                {profile?.temporaryAddress ? profile.temporaryAddress : "-"}
              </p>
            )}
          </div>

          {/* Permanent Addess */}
          <div className="input-group profile-permanent-address">
            <label htmlFor="profilePermanentAddress">Permanent Address</label>
            {isEditing ? (
              <input
                type="text"
                name="permanentAddress"
                value={formData?.permanentAddress}
                onChange={handleChange}
              />
            ) : (
              <p>
                {profile?.permanentAddress ? profile.permanentAddress : "-"}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="input-buttons">
        {isEditing ? (
          <>
            <button
              onClick={handleProfileChange}
              type="submit"
              className="button profile-update"
              id="profileUpdate"
              disabled={submitting}
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
    </MainComponent>
  );
};

export default Profile;
