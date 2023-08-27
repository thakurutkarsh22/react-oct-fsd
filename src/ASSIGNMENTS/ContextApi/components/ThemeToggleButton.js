import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

// Switch to dark theme

const ThemeToggleButton = () => {
  const contextVal = useContext(ThemeContext);

  const { theme, toggleTheme } = contextVal;

  console.log("ThemeToggleButton", theme, toggleTheme);

  return (
    <>
      <button
        className={`btn btn-${theme} txt-${theme}`}
        onClick={toggleTheme}
        id="global-theme-toggler"
      >
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
