import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./HelloCompontnt";
import ByeComponent from "./ByeComponent";
import IncrementDecrementComponent from "./IncementDecrementCounter/IncrementDecrementComponent";
import App from "./App";
import RouteApp from "./RouteApp/RouteApp";
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./ContextApi/ContextApi";
import AppContextApi from "./ASSIGNMENTS/ContextApi/components/App";
import PortalDialogBox from "./Portal/Portal";

const root = ReactDOM.createRoot(document.getElementById("root"));
// This is where the vitual dom Root is created from the REAL DOm (Basically it is a light copy of real dom node...).

root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <RouteApp />
    </BrowserRouter> */}

    {/* COntext api Undestanding  */}

    {/* <ContextApi /> */}

    {/* Assignment Section  */}

    {/* <AppContextApi /> */}
    {/* <PortalDialogBox /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
