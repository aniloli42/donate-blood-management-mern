import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { displayMessage } from "../../../Actions/Message";
import { sendOTP } from "../../../API/API";
import { emailValidation } from "../../../Validation";

const inputData = { email: "" };

const Forget = ({ changeElement }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(inputData);
  const [submitting, setSubmitting] = useState(false);

  const updateFormData = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleForget = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!emailValidation(formData.email)) {
      setSubmitting(false);

      dispatch(displayMessage("Invalid Email"));
      return;
    }

    try {
      const { data } = await sendOTP(formData);
      const { message } = await data;
      dispatch(displayMessage(message));
      setSubmitting(false);

      changeElement(formData.email);
    } catch (error) {
      const message = error?.response?.data?.message ?? "Something Went Wrong!";
      console.error(error.message);

      dispatch(displayMessage(message));
    }
  };

  return (
    <div className="entry-form-div">
      <form className="entry-form forget" method="post" onSubmit={handleForget}>
        <h2>Forget Password</h2>
        <div className="entry-elements">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            email="email"
            value={formData.email}
            id="email"
            name="email"
            autoComplete="off"
            onChange={updateFormData}
          />
        </div>
        <div className="entry-button">
          <button type="submit" disabled={submitting}>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forget;
