import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Board from "./components/Board/Board";
import { useState } from "react";
import { DataContext, providerContext } from "./Context/DataContext";
import MarketPlan from "./components/MarketPlan.js/MarketPlan";

function App() {
  const [data, setData] = useState([]);
  const [cards, setCard] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <providerContext.Provider value={{ setData, data, cards, setCard, setIsDarkMode,isDarkMode }}>
      <DataContext />
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Board />}></Route>
          <Route path="/chart" element={<MarketPlan />}></Route>
        </Routes>
      </div>
    </providerContext.Provider>
  );
}

export default App;
