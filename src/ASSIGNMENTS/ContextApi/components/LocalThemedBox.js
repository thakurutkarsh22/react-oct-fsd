import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

// child
const LocalThemedBox = () => {
  // props or State changing ?
  //   const theme = "";

  const contextVal = useContext(ThemeContext);

  const { theme } = contextVal;

  const [localTheme, setLocalTheme] = useState(theme); // default 1st rended

  //   Asynconous handling -> Side effect
  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${localTheme}`}
    >
      <p className={`txt-${localTheme}`} id="local-theme-text-container">
        Hii
      </p>

      <button
        id="local-theme-toggler"
        className={`btn btn-${localTheme} txt-${localTheme}`}
        onClick={() =>
          setLocalTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"))
        }
      >
        Toggle local theme to {localTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
