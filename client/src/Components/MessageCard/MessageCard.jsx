import React, { useEffect, useRef, useCallback } from "react";
import "./messagecard.css";

import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../Actions/Message";

const MessageCard = () => {
  const messageDiv = useRef(null);
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.Message);

  const fadeOut = useCallback(() => {
    messageDiv.current.style.bottom = `0px`;
    messageDiv.current.style.opacity = "0";
    setTimeout(() => {
      messageDiv.current.style.display = `none`;
      dispatch(clearMessage());
    }, 200);
  }, [dispatch]);

  useEffect(() => {
    if (message === null) return;
    fadein();

    if (!status) {
      setTimeout(() => {
        fadeOut();
      }, 2000);
    }
  }, [status, dispatch, message, fadeOut]);

  const fadein = () => {
    messageDiv.current.style.display = "grid";
    messageDiv.current.style.opacity = "0";

    setTimeout(() => {
      messageDiv.current.style.bottom = `10px`;
      messageDiv.current.style.opacity = "1";
    }, 200);
  };

  return (
    <div className="message-container" ref={messageDiv}>
      <p className="message-div-text">{message}</p>
      {status && (
        <button className="message-button-dismiss" onClick={fadeOut}>
          <i className="fas fa-times-circle fa-lg"></i>
        </button>
      )}
    </div>
  );
};

export default MessageCard;
