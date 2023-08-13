import React, { useContext, useState } from "react";
import Column from "../column/Column";
import ColumnPopup from "../column/Popup/Popup";
import { providerContext } from "../../Context/DataContext";
import "./Board.css";
const Board = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = () => {
    setIsPopupVisible(true);
  };

  const { data, isDarkMode } = useContext(providerContext);

  return (
    <div className={`container-fluid ${isDarkMode ? " dark__mode" : "light-mode"}`}>
      <div className="row flex-nowrap overflow-auto custom-scrollbar h-100 ">
        {data.map((value, index) => (
          <div className={`col-lg-4 col-md-4 card m-3 column__style ${isDarkMode ? "text-light bg-dark" : "bg-light"}`} key={index}>
            <Column colValue={value.name} />
          </div>
        ))}

        <div className={`col-lg-2 col-md-4 card m-3 d-flex align-items-center justify-content-center column__style ${isDarkMode ? "text-light bg-gray" : "bg-light"}`}>
          <div className="card-body d-flex align-items-center justify-content-center">
            <button
              className={`btn ${isDarkMode ? "btn-outline-light " : "btn-outline-dark"} btn__edit__card btn-block`}
              onClick={handleClick}
            >
              Add Column
            </button>
          </div>
          {isPopupVisible && (
            <ColumnPopup onClose={() => setIsPopupVisible(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
