import React, { useContext, useState } from "react";
import "./EditPopup.css"; // Import the stylesheet
import { providerContext } from "../../../Context/DataContext";

const EditPopup = ({ onClose, onSave, id, resSuccess }) => {
   const { data, cards } = useContext(providerContext);
  const selectedCard = cards.filter((card) => card._id.includes(id));
  const [title, setTitle] = useState(selectedCard[0].title);
  const [description, setDescription] = useState(selectedCard[0].description);
 
  const Id = selectedCard[0]._id;
  const [status, setStatus] = useState(selectedCard[0].status);
  const handleSave = () => {
    onSave({ title, description, status }, Id);
    onClose();
  };
  return (
    <div className="popup-container ">
      <div className="popup p-5">
        <div className="popup-content">
          <h2>Create New Card</h2>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={selectedCard[0].title}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={selectedCard[0].description}
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Choose</option>
              {data.map((opt, index) => {
                return (
                  <option key={index} value={opt.name}>
                    {opt.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="popup-buttons">
          {resSuccess !== "" && (
            <span style={{ color: "green" }}>{resSuccess} </span>
          )}
          <button className="btn btn-primary btn__edit__card" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary btn__edit__card" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
