import React, { useContext, useState } from "react";
import "./Card.css";
import CardInfo from "../NavBar/CardInfo";
import { providerContext } from "../../Context/DataContext";
const Card = ({ cardValue }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const {  isDarkMode } = useContext(providerContext);

  return (
    <>
      <div className={`card back__ground__card ${isDarkMode ? " dark__mode__card" : "light-mode"}`} onClick={openPopup}>
        <div className="card-body">
          <h5 className="card-title">{cardValue.title}</h5>
          <p className="card-text">Click to view</p>
        </div>
      </div>
      {isPopupOpen && <CardInfo cardInfo={cardValue} onClose={closePopup} />}
    </>
  );
};

export default Card;
