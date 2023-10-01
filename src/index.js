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
import BasicReduxAppFunctional from "./Redux/BasicRedux/FunctionalCompoenentApp/BasicReduxAppFunctional";
import { Provider } from "react-redux";
import basicReduxStore from "./Redux/BasicRedux/store/store";

import BasicReduxAppClass from "./Redux/BasicRedux/ClassComponentApp/BasicReduxAppClass";
import ExampleComponent from "./Redux/BasicRedux/FunctionalCompoenentApp/ExampleComponent";
import CounterRedux from "./Redux/Redux-Toolkit/Redux-Counter/ReduxCounter";
import bigStore, {
  counterSlice,
} from "./Redux/Redux-Toolkit/Redux-Counter/store/store";
import githubStore from "./Redux/GithuReduxApp/store/githubstore";
import GithubComponent from "./Redux/GithuReduxApp/githubComponent";
import CounterUndoRedo from "./Redux/UndoRedoComponent/CounterUndoRedoRedux";
import undoRedoStore from "./Redux/UndoRedoComponent/store";
import FolderStructure from "./InterviewQuestions/FolderStructure/ForderStructure";
import folderStructure from "./InterviewQuestions/FolderStructure/data";
import TicTacToe from "./InterviewQuestions/TicTacToe/TicTacToe";
import StarSystem from "./InterviewQuestions/StarSystem/StarSystem";

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

    {/* <Provider store={basicReduxStore()}>
      <BasicReduxAppFunctional />
      <ExampleComponent />

      class component
      <BasicReduxAppClass />
    </Provider> */}

    {/* <Provider store={bigStore}>
      <CounterRedux />
    </Provider> */}

    {/* <Provider store={githubStore()}>
      <GithubComponent />
    </Provider> */}

    {/* <Provider store={undoRedoStore}>
      <CounterUndoRedo />
    </Provider> */}

    {/* -------------------  INTERVIEW QUESTIONS --------------- */}

    {/* <FolderStructure folderData={folderStructure} /> */}
    {/* <TicTacToe /> */}
    {/* <StarSystem /> */}

    {/* -----------------  INTERVIEW QUESTIONS  END ----------------------  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
