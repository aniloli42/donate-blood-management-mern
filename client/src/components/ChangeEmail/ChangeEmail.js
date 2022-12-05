import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./changeEmail.css";

import { changeEmail } from "./../../actions/Auth";
import { displayMessage } from "./../../actions/Message";
import { emailValidation, passwordValidation } from "./../../validation/index";

const ChangeEmail = ({ func }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleEmailChange = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);

      if (formData.email === "" || formData.password === "") {
        setSubmitting(false);
        return dispatch(displayMessage("Enter email & password"));
      }

      if (!emailValidation(formData.email)) {
        setSubmitting(false);
        return dispatch(displayMessage("Invalid Email"));
      }

      const checkPassword = passwordValidation(formData.password);

      if (!checkPassword.status) {
        setSubmitting(false);
        return dispatch(displayMessage(checkPassword.message));
      }

      await dispatch(changeEmail(formData));
      setSubmitting(false);
      func();
    } catch (error) {
      setSubmitting(false);
      console.error(error.message);
      return dispatch(displayMessage(error.message));
    }
  };

  return (
    <form method="post" onSubmit={handleEmailChange}>
      <div className="input-group">
        <label>New Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="button" disabled={submitting}>
          Change Email
        </button>
      </div>
    </form>
  );
};

export default ChangeEmail;
