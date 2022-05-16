import React, { useRef, useState, useEffect } from "react";
import logo from "../../Assets/Images/blood.png";
import show from "../../Assets/Images/eye.svg";
import hide from "../../Assets/Images/eye-off.svg";
import { Link } from "react-router-dom";
import { login } from "./../../Actions/Auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "../../Validation";
import { displayMessage } from "../../Actions/Message";

let inputData = { email: "", password: "" };

const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(inputData);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "" || token === null || token === undefined) return;
    history("/", { replace: true });
  });

  const updateFormData = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const password = useRef(null);

  const changePasswordType = (e) => {
    if (password.current.type === "password") {
      e.target.src = hide;
      password.current.type = "text";
      return;
    }

    e.target.src = show;
    password.current.type = "password";
    return;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.temporaryAddress === "" ||
      formData.permanentAddress === ""
    ) {
      setSubmitting(false);
      dispatch(displayMessage("All fields are required"));
      return;
    }

    if (!emailValidation(formData.email)) {
      setSubmitting(false);
      dispatch(displayMessage("Invalid Email"));
      return;
    }

    const isValidPassword = passwordValidation(formData.password);

    if (!isValidPassword.status) {
      setSubmitting(false);
      dispatch(displayMessage(isValidPassword.message));
      return;
    }

    dispatch(login(formData, history, setSubmitting));
  };

  return (
    <div className="user-entry">
      {/* Brand Showcase */}

      <div className="brand-showcase">
        {/* Brand Logo */}
        <div className="brand-logo">
          <img src={logo} alt="" />
          <h1>DONATE</h1>
        </div>
        <p className="brand-slogon">
          Every drop of blood matters, if you can save life
        </p>
      </div>
      <div className="entry-form-div">
        <form className="entry-form">
          <h2>Login</h2>
          <div className="entry-elements">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={updateFormData}
              value={formData.email}
              id="email"
              autoComplete="off"
            />
          </div>
          <div className="entry-elements">
            <label htmlFor="password">Password</label>
            <div className="group-entry-element">
              <input
                type="password"
                name="password"
                onChange={updateFormData}
                ref={password}
                id="password"
                value={formData.password}
                autoComplete="off"
              />
              <img
                src={show}
                alt="show hide icon"
                onClick={changePasswordType}
              />
            </div>
          </div>

          <div className="entry-button">
            <button type="submit" onClick={handleLogin} disabled={submitting}>
              LOGIN
            </button>
            <Link to="/forget-password">Forget Password?</Link>
          </div>
        </form>

        <div className="entry-message">
          <p>Don't have an account?</p>
          <Link to="/signup">Click Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
