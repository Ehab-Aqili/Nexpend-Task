import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
export const providerContext = createContext();

export const DataContext = () => {
  const { setData, setCard } = useContext(providerContext);
  useEffect(() => {
    const fetchColumn = async () => {
      await axios
        .get("http://127.0.0.1:8080/column/get-column")
        .then((response) => {
          setData(response.data.columns);
        })
        .catch((err) => {
          console.log("Error adding column:", err);
        });
    };
    const fetchCards = async () => {
      await axios
        .get("http://127.0.0.1:8080/cards")
        .then((response) => {
          const data = response.data.cards;
          setCard(data);
        })
        .catch((err) => {
          console.log("Error adding column:", err);
        });
    };
    fetchColumn();
    fetchCards();
  }, [setCard, setData]);
  return <></>;
};
