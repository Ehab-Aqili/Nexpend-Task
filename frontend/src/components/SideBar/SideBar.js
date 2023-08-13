// SideBar.js
import React, { useContext, useState } from "react";
import "./SideBar.css"; 
import boardImg from "../../image/board.svg";
import { Link } from "react-router-dom";
import { providerContext } from "../../Context/DataContext";
const SideBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const toggleSidebar = (buttonIndex) => {
    setActiveButton(buttonIndex === activeButton ? null : buttonIndex);
  };
  const { isDarkMode } = useContext(providerContext);

  return (
    <div className={`w-25 `}>
      <div
        className={` card sidebar ${activeButton ? "active" : "inactive"} ${isDarkMode ? " bg-dark" : "light-mode"}`}
        style={{ height: "90vh" }}
      >
        <div className={`list-group ${isDarkMode ? " dark__mode" : "light-mode"}`}>
          <button
            type="button"
            className={`list-group-item list-group-item-action ${
              activeButton === 1 ? "active" : ""
            }${isDarkMode ? " dark__mode" : "light-mode"}  `}
            onClick={() => toggleSidebar(1)}
          >
            <img src={boardImg} alt="add new board icon" />
            <span className="ps-1">
              <Link to="/">Platform Launch</Link>{" "}
            </span>
          </button>
          <button
            type="button"
            className={`list-group-item list-group-item-action ${
              activeButton === 2 ? "active" : ""
            } ${isDarkMode ? " dark__mode" : "light-mode"}`}
            onClick={() => toggleSidebar(2)}
          >
            <img src={boardImg} alt="add new board icon" />
            <span className="ps-1">
              {" "}
              <Link to="/chart">Marketing Plan</Link>{" "}
            </span>
          </button>
          <button
            type="button"
            className={` list-group-item list-group-item-action ${
              activeButton === 3 ? "active" : ""
            } ${isDarkMode ? " dark__mode" : "light-mode"}`}
            onClick={() => toggleSidebar(3)}
          >
            <img src={boardImg} alt="add new board icon" />
            <span className="ps-1">roadMap</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
