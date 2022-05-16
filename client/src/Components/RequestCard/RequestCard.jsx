import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { ButtonGroup } from "..";
import { getRequest } from "../../Actions/manageRequest";
import { deleteRequest } from "../../Actions/Request";
import "./requestcard.css";
import { displayLoader } from "../../Actions/Loader";

const RequestCard = ({
  bloodtype,
  requestname,
  time,
  address,
  id,
  edit,
  func,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="recent-content" id={id}>
      <div className="text-badge">{bloodtype}</div>
      <div className="request-name">
        {requestname}
        <small>(9806242024)</small>
      </div>
      <div className="request-address">
        {moment(time).fromNow()} . ({address})
      </div>
      {!edit ? (
        <a className="request-view" href={`tel:9806242024`}>
          Call
        </a>
      ) : (
        <div className="request-view-group">
          <ButtonGroup
            editFunc={async () => {
              try {
                dispatch(displayLoader(true));
                await dispatch(getRequest(id));
                func();
                dispatch(displayLoader(false));
              } catch (error) {
                console.error(error.message);
                dispatch(displayLoader(false));
              }
            }}
            deleteFunc={async () => {
              try {
                dispatch(displayLoader(true));

                await dispatch(deleteRequest(id));
                dispatch(displayLoader(false));
              } catch (error) {
                console.error(error.message);
                dispatch(displayLoader(false));
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RequestCard;
