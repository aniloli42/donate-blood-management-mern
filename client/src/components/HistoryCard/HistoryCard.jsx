import React from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup } from "..";
import { deleteHistory } from "../../actions/History";
import { displayLoader } from "../../actions/Loader";
import { getHistory } from "../../actions/manageHistory";
import { displayMessage } from "../../actions/Message";

const HistoryCard = ({ date, location, remarks, id, func }) => {
  const dispatch = useDispatch();
  return (
    <div className="history-data" id={id}>
      <div>{date ?? ""}</div>
      <div>{location ?? ""}</div>
      <div>{remarks ?? ""}</div>
      <div>
        <ButtonGroup
          editFunc={() => {
            dispatch(displayLoader(true));
            dispatch(getHistory(id))
              .then(() => {
                dispatch(displayLoader(false));
                func();
              })
              .catch(() => {
                dispatch(displayLoader(false));
                dispatch(displayMessage("Something Went Wrong!"));
              });
          }}
          deleteFunc={() => {
            dispatch(displayLoader(true));
            dispatch(deleteHistory(id));
          }}
        />
      </div>
    </div>
  );
};

export default HistoryCard;
