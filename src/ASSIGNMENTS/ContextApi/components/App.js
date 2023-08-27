import React from "react";
import "../styles/App.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Page } from "./Page";
const AppContextApi = () => {
  return (
    <div id="main">
      <ThemeProvider>
        <Page />
        <ThemeToggleButton />
      </ThemeProvider>
    </div>
  );
};

export default AppContextApi;
