import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const initialTheme = {
    theme,
    toggleTheme: () => {
      setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
    },
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={initialTheme}>
        {props.children}
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export { ThemeProvider, ThemeContext };
