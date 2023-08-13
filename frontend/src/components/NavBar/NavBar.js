import React, { useContext, useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import PopupCard from "./PopupCard";
import { providerContext } from "../../Context/DataContext";

const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const { data, isDarkMode, setIsDarkMode } = useContext(providerContext);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle dark mode state
  };


  return (
    <div>
      <NavLink className={`navbar ${isDarkMode ? "bg-dark" : "bg-body-tertiary"}`}>
        <div className="container">
          <Link className={`navbar-brand ms-5 ${isDarkMode ? "text-light" : "text-dark"}`} to="/">
            Board
          </Link>
          <button className={`btn btn-outline btn__add__card me-2 ${isDarkMode ? "btn-outline-light" : "btn-outline-dark"}`} type="button" onClick={openPopup}>
            Add New Card
          </button>
          <button className={`btn btn-sm  ${isDarkMode ? "btn-light" : "btn-dark"}`} onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </NavLink>
      {isPopupOpen && <PopupCard data={data} onClose={closePopup} />}
    </div>
  );
};

export default NavBar;
