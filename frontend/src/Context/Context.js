// import axios from "axios";
// import React, { createContext, useContext, useEffect } from "react";
// export const dataContext = createContext();
// const Context = () => {
//   const { setData } = useContext(dataContext);
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8080/column/get-column")
//       .then((response) => {
//         setData(response.data.columns);
//         // console.log(response.data.columns);
//       })
//       .catch((err) => {
//         console.log("Error adding column:", err);
//       });
//   },[setData]);

//   return <div>Context</div>;
// };

// export default Context;
