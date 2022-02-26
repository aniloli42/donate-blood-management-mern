import React, { useRef, useState, useEffect } from "react";
import "./signup.css";
import logo from "../../Assets/Images/blood.png";
import show from "../../Assets/Images/eye.svg";
import hide from "../../Assets/Images/eye-off.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signup } from "./../../Actions/Auth";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  stringValidation
} from "../../Validation";

import { displayMessage } from "../../Actions/Message";

const inputData = {
  name: "",
  email: "",
  bloodType: "O+",
  temporaryAddress: "",
  permanentAddress: "",
  password: ""
};

const Signup = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [formData, setformData] = useState(inputData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "" || token === null || token === undefined) return;
    history("/", { replace: true });
  });

  const updateFormData = (e) => {
    setformData((prevformData) => {
      return { ...prevformData, [e.target.name]: e.target.value };
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

  const handleSignup = (e) => {
    e?.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.temporaryAddress === "" ||
      formData.permanentAddress === ""
    ) {
      return dispatch(displayMessage("All fields are required", true));
    }

    if (!nameValidation(formData.name)) {
      return dispatch(displayMessage("Name is not valid", true));
    }

    if (!stringValidation(formData.temporaryAddress))
      return dispatch(displayMessage("Invalid Temporary Address", true));

    if (!stringValidation(formData.permanentAddress))
      return dispatch(displayMessage("Invalid Permanent Address", true));

    if (!emailValidation(formData.email)) {
      return dispatch(displayMessage("Invalid Email", true));
    }

    const isValidPassword = passwordValidation(formData.password);

    if (!isValidPassword.status)
      return dispatch(displayMessage(isValidPassword.message, true));

    return dispatch(signup(formData, history));
  };

  return (
    <div className='user-entry'>
      {/* Brand Showcase */}

      <div className='brand-showcase'>
        {/* Brand Logo */}
        <div className='brand-logo'>
          <img src={logo} alt='' />
          <h1>DONATE</h1>
        </div>
        <p className='brand-slogon'>
          Every drop of blood matters, if you can save life
        </p>
      </div>
      <div className='entry-form-div'>
        <form className='entry-form signup' method='post'>
          <h2>Signup</h2>
          <div className='entry-elements'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={updateFormData}
              autoComplete='off'
              value={formData.name}
            />
          </div>

          <div className='entry-elements'>
            <label htmlFor='bloodType'>Blood Type</label>
            <select
              name='bloodType'
              id='bloodType'
              value={formData.bloodType}
              onChange={updateFormData}
            >
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
            </select>
          </div>

          <div className='entry-elements'>
            <label htmlFor='temporaryAddress'>Temporary Address</label>
            <input
              type='text'
              name='temporaryAddress'
              id='temporaryAddress'
              autoComplete='off'
              value={formData.temporaryAddress}
              onChange={updateFormData}
            />
          </div>

          <div className='entry-elements'>
            <label htmlFor='permanentAddress'>Permanent Address</label>
            <input
              type='text'
              name='permanentAddress'
              id='permanentAddress'
              autoComplete='off'
              value={formData.permanentAddress}
              onChange={updateFormData}
            />
          </div>

          <div className='entry-elements'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              value={formData.email}
              autoComplete='off'
              onChange={updateFormData}
            />
          </div>
          <div className='entry-elements'>
            <label htmlFor='password'>Password</label>
            <div className='group-entry-element'>
              <input
                type='password'
                name='password'
                ref={password}
                id='password'
                autoComplete='off'
                onChange={updateFormData}
                value={formData.password}
              />
              <img
                src={show}
                alt='show hide icon'
                onClick={changePasswordType}
              />
            </div>
          </div>

          <div className='entry-button'>
            <button type='submit' onClick={handleSignup}>
              REGISTER
            </button>
          </div>
        </form>

        <div className='entry-message'>
          <p>Already have account?</p>
          <Link to='/login'>Click Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
