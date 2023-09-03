import { useState } from "react";
import styles from "./styles.module.css";
import useToggle from "../useToggle";
import HellouseToggle from "../useToggle";

function Mermaid() {
  const [isDark, setDark] = useToggle(true);

  // useState(() => {
  //   setDark();
  // }, [setDark]);

  const backgroundStyles = isDark ? styles["bg-dark"] : "";

  return (
    <>
      <div className={backgroundStyles}>
        <h1>Mermaid</h1>

        <br />

        <button onClick={setDark}>Toggle darkness</button>
      </div>
    </>
  );
}

export default Mermaid;
