import React, { useEffect, useState } from "react";
import { MainComponent } from "..";
import { HistoryCard } from "../../Components";
import "./donationhistory.css";

import { useDispatch, useSelector } from "react-redux";
import { getHistorys } from "./../../Actions/History";
import CreateHistory from "./component/CreateHistory";
import handleOverflow from "../../utils/hideOverFlow";

const DonationHistory = () => {
  const dispatch = useDispatch();
  const historyObj = useSelector((state) => state.History);
  const [isCreate, setCreate] = useState(false);

  useEffect(() => {
    dispatch(getHistorys());
  }, [dispatch]);

  const changePopup = () => {
    setCreate((prev) => !prev);
    handleOverflow(!isCreate);
  };

  const toDate = (date) => {
    return new Date(date).toDateString();
  };

  return (
    <MainComponent>
      {isCreate && <CreateHistory func={changePopup} />}

      <header>
        <h2>Donation history</h2>
        <button className="button" onClick={changePopup}>
          Add New
        </button>
      </header>
      <hr />

      <div className="history-container">
        <div className="history-table">
          {/* History Headers */}
          <div className="history-headers">
            <div className="history-header">Date</div>
            <div className="history-header">Place</div>
            <div className="history-header">Remarks</div>
            <div className="history-header">Actions</div>
          </div>

          {/* History Data */}
          {historyObj?.map((history, index) => {
            return (
              <HistoryCard
                key={index}
                date={toDate(history?.donatedAt)}
                location={history?.location}
                remarks={history?.remarks}
                id={history?._id}
                func={changePopup}
              />
            );
          })}
          {historyObj.length === 0 && (
            <div className="message">No Any Donation History Available</div>
          )}
        </div>
      </div>
    </MainComponent>
  );
};

export default DonationHistory;
