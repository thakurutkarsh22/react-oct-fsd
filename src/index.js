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
import LazyLoading from "./Performance/LazyLoading/LazyLoading";
import LazyLoadingCustomHooks from "./CustomHooks/useToggle/Problem/LazyLoading";
import UseLocalStorageFormsApp from "./CustomHooks/useLocalStorage.js/useLocalStorageFormsApp";
import LoginForm from "./AuthApp/components/LoginForm";
import AuthApp from "./AuthApp/AuthApp";
import BasicReduxAppFunctional from "./Redux/BasicRedux/BasicReduxAppFunctional";
import { Provider } from "react-redux";
import basicReduxStore from "./Redux/BasicRedux/store/store";
import ExampleComponent from "./Redux/BasicRedux/ExampleComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
// This is where the vitual dom Root is created from the REAL DOm (Basically it is a light copy of real dom node...).

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BrowserRouter>
      <RouteApp />
    </BrowserRouter> */}

    {/* COntext api Undestanding  */}

    {/* <ContextApi /> */}

    {/* Assignment Section  */}

    {/* <AppContextApi /> */}
    {/* <PortalDialogBox /> */}

    {/* Lazy loading */}

    {/* <BrowserRouter>
      <LazyLoading />
      <LazyLoadingCustomHooks />
    </BrowserRouter> */}

    {/* <UseLocalStorageFormsApp /> */}

    {/* ------------ LOGIN ------ FORMS --------- */}

    {/* <LoginForm /> */}

    {/* <BrowserRouter>
      <AuthApp />
    </BrowserRouter> */}

    {/* --------------------  REDUX  --------------------  */}

    {/*  */}

    <Provider store={basicReduxStore()}>
      <BasicReduxAppFunctional />
      <ExampleComponent />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
