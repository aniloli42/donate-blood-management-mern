import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { displayMessage } from "../../../actions/Message";
import { verifyOTP } from "../../../api/API";

const OTP = ({ email, changeElement }) => {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [otp, setOtp] = useState({ otp: "" });

  const updateFormData = (e) => {
    setOtp((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const intOTP = parseInt(otp.otp);
      const { data } = await verifyOTP({ otp: intOTP, email });
      const { message } = await data;

      dispatch(displayMessage(message));
      setSubmitting(false);

      changeElement();
    } catch (error) {
      const message = error?.response?.data?.message ?? "Something Went Wrong!";
      console.error(error.message);

      dispatch(displayMessage(message));
    }
  };

  return (
    <div className="entry-form-div">
      <form className="entry-form forget" method="post" onSubmit={handleOTP}>
        <h2>Verify OTP</h2>
        <div className="entry-elements">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            name="otp"
            value={otp.otp}
            onChange={updateFormData}
            id="otp"
            autoComplete="off"
          />
        </div>
        <div className="entry-button">
          <button type="submit" disabled={submitting}>
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTP;
