import { useState } from "react";
import styles from "./styles.module.css";
import useToggle from "../useToggle";

function Whale() {
  const [isDark, setDark] = useToggle(true);

  const backgroundStyles = isDark ? styles["bg-dark"] : "";
  return (
    <>
      <div className={backgroundStyles}>
        <h1>Whale</h1>

        <br />

        <button onClick={setDark}>Toggle darkness</button>
      </div>
    </>
  );
}

export default Whale;
