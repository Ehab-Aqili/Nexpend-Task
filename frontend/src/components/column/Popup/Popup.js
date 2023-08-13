import React, { useState } from "react";
import axios from "axios";

const ColumnPopup = ({ onClose }) => {
  const [columnName, setColumnName] = useState("");
  const [alert, setAlert] = useState();

  const addColumn = () => {
    axios
      .post("http://127.0.0.1:8080/column/add-column", {
        name: columnName,
      })
      .then((response) => {
        setAlert(response.data);
        setColumnName("");
      })
      .catch((err) => {
        console.log("Error adding column:", err);
      });
  };

  const handleInputChange = (event) => {
    setColumnName(event.target.value);
  };

  return (
    <div className="popup-container">
      <div className="popup  bg-light p-3 border rounded">
        <input
          type="text"
          value={columnName}
          onChange={handleInputChange}
          placeholder="Enter column name"
          className="form-control mb-2"
        />

        <button className="btn btn-primary btn__edit__card me-2  ms-2" onClick={addColumn}>
          Add
        </button>
        <button className="btn btn-secondary btn__edit__card" onClick={onClose}>
          Cancel
        </button>

        {alert !== "" ? (
          <span style={{ color: "green" }}>{alert}</span>
        ) : (
          <span style={{ color: "red" }}>
            Something wrong check your network
          </span>
        )}
      </div>
    </div>
  );
};

export default ColumnPopup;
