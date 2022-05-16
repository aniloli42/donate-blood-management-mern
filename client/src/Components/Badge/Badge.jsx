import React from "react";
import "./badge.css";

const Badge = (props) => {
  const { badgetitle, badgetext } = props;

  return (
    <div className="card">
      <div className="badge"></div>
      <h3>{badgetitle}</h3>
      <p>{badgetext ?? "-"}</p>
    </div>
  );
};

export default Badge;
