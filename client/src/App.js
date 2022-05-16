import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";

import {
  Signup,
  Login,
  ForgetPassword,
  Dashboard,
  Profile,
  Security,
  Requests,
  DonationHistory,
} from "./Pages";

import NotFound from "./Components/NotFound/NotFound";
import { Loader, MessageCard } from "./Components";
import { useSelector } from "react-redux";

function App() {
  const { status: loaderStatus } = useSelector((state) => state.Loader);

  return (
    <>
      {loaderStatus && <Loader />}
      <MessageCard />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/requests" element={<Requests />} />
        <Route exact path="/donation-history" element={<DonationHistory />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
