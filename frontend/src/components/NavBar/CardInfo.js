import React, { useState } from "react";

import axios from "axios";
import EditPopup from "./../column/Popup/EditPopup";

const CardInfo = ({ onClose, cardInfo }) => {
  const [successfully, setSuccessfully] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleSaveCard = (newCard, Id) => {
    axios
      .patch(`http://127.0.0.1:8080/edit-card/${Id}`, newCard)
      .then((response) => {
        setSuccessfully(response.data);
      })
      .catch((err) => {
        console.log("Error adding column:", err);
      });
    setPopupOpen(false);
  };

  return (
    <div className="popup-overlay d-flex justify-content-center align-items-center">
      <div className="popup p-4 bg-light rounded shadow">
        <div className=" d-flex justify-content-end ">
          <button className="btn btn-sm btn-secondary m-2" onClick={onClose}>
            X
          </button>
        </div>
        {isPopupOpen && (
          <EditPopup
            resSuccess={successfully}
            id={cardInfo._id}
            onClose={handleClosePopup}
            onSave={handleSaveCard}
          />
        )}
        <div className="container mt-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title d-flex ">Title: {cardInfo.title}</h5>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h6>Description: </h6>
              <p className="card-text">{cardInfo.description}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="status-buttons mt-2 d-flex">
                <h6>Status: {cardInfo.status}</h6>
              </div>
            </div>
          </div>
          <button
            className="btn btn-md btn-primary btn__edit__card mt-2"
            onClick={handleCardClick}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
