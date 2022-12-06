import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./notfound.module.css";

const NotFound = () => {
  const history = useNavigate();

  const Back = () => {
    history("/login", { replace: true });
  };

  return (
    <>
      <div className={styles.errorContainer}>
        <div className={styles.errorBadge}>404</div>
        <p className={styles.errorText}>Page Not Found!</p>
        <button className={styles.backBtn} onClick={Back}>
          GO HOME
        </button>
      </div>
    </>
  );
};

export default NotFound;
