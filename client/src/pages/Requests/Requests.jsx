import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainComponent } from "..";
import { setOtherRequest, setOwnRequest } from "../../actions/Request";
import { RequestCard } from "../../components";
import handleOverflow from "../../utils/hideOverFlow";
import CreateRequest from "./component/CreateRequest";
import "./requests.css";

const Requests = () => {
  const dispatch = useDispatch();

  const Request = useSelector((state) => state.Request);

  const [popup, setPopup] = useState(false);

  const changePopup = () => {
    setPopup((prev) => !prev);
    handleOverflow(!popup);
  };

  useEffect(() => {
    dispatch(setOwnRequest());
    dispatch(setOtherRequest());
  }, [dispatch]);

  return (
    <MainComponent>
      {popup && <CreateRequest func={changePopup} />}
      <h2>Requests</h2>
      <section className="own-requests">
        <header>
          <h2>Own Requests</h2>
          <button className="button" onClick={changePopup}>
            Add New
          </button>
        </header>
        <hr />
        <div className="requests-content own-requests-content">
          {Request?.ownRequest !== 0 &&
            Request?.ownRequest?.map((request, index) => {
              return (
                <RequestCard
                  key={index}
                  time={request.requestedAt}
                  bloodtype={request.bloodType}
                  address={request.location}
                  requestname={request.name}
                  id={request._id}
                  func={changePopup}
                  edit
                />
              );
            })}

          {Request?.ownRequest?.length === 0 && (
            <div className="message">No Any Requests Done Yet.</div>
          )}
        </div>
      </section>
      <section className="other-requests">
        <header>
          <h2>Other Requests</h2>
          <button
            className="button button-center"
            onClick={() => dispatch(setOtherRequest())}
          >
            Refresh
          </button>
        </header>
        <hr />
        <div className="requests-content other-requests-content">
          {Request?.otherRequest !== 0 &&
            Request?.otherRequest?.map((request, index) => {
              return (
                <RequestCard
                  key={index}
                  time={request.requestedAt}
                  bloodtype={request.bloodType}
                  address={request.location}
                  requestname={request.name}
                  id={request._id}
                />
              );
            })}

          {Request?.otherRequest?.length === 0 && (
            <div className="message">No Any Requests Found.</div>
          )}
        </div>
      </section>
    </MainComponent>
  );
};

export default Requests;
