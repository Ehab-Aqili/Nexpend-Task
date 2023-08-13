import React, { useContext } from "react";
import Card from "../Card/Card";
import { providerContext } from "../../Context/DataContext";
import "./column.css"
const Column = ({ colValue }) => {
  const { cards } = useContext(providerContext);
  const columnName = colValue;
  const filterCard = cards.filter((card) => columnName.includes(card.status));
  // console.log(filterCard)
  
  return (
    <>
      <div className="container h-100" >
        <h1 className="d-flex justify-content-center " >{colValue}</h1>
        {filterCard.map((value, index) => (
          <Card cardValue={value} key={index} />
        ))}
      </div>
      
    </>
  );
};

export default Column;
