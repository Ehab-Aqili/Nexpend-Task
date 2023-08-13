import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { providerContext } from "./../../Context/DataContext";
import { Link } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true, // Start the Y-axis at zero
      suggestedMax: 10,
    },
  },
};
const style = {
  btn__chart: {
    backgroundColor: "#fd9eb2",
    color: "black",
    borderColor: "#fd9eb2",
    ":hover": {
      backgroundColor: "#fff",
    },
  },
};

const DataChart = () => {
  const { data, cards, isDarkMode } = useContext(providerContext);

  // console.log(data, "sadasdsadas", cards )
  // console.log("dataName", data[0])

  const statusName = data.map((value) => {
    return value.name;
  });
  const cardCountsByStatus = statusName.map(
    (status) => cards.filter((card) => card.status === status).length
  );

  //   console.log(cardCountsByStatus);
  // console.log(statusName)
  const dataChart = {
    labels: statusName,
    datasets: [
      {
        label: "Dataset 1",
        data: cardCountsByStatus,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <div
        className={`container-fluid   p-5    ${
          isDarkMode ? " dark__mode" : "light-mode"
        }

`}
      >
        <div
          className={`w-100 card d-flex align-items-center p-5 h-100  row  ${
            isDarkMode ? " bg-dark" : "light-mode"
          }`}
        >
          <div className="col-12 card w-50 ">
            {React.createElement(Bar, { options: options, data: dataChart })}
          </div>
          <div className="col-12 ">
            <div className="row mt-5 gap-5 d-flex justify-content-center">
              {statusName.map((status, index) => (
                <div
                  key={index}
                  className={`col-3 pb-2 card ${
                    isDarkMode ? " dark__mode" : "light-mode"
                  }`}
                >
                  <div className="card-body">Status: {status}</div>
                  <div className="card-body">
                    Number Of Cards: <span>{cardCountsByStatus[index]}</span>
                  </div>
                  <Link
                    to="/"
                    className="btn btn-outline-primary btn__chart "
                    style={style.btn__chart}
                  >
                    Add New Card
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataChart;
