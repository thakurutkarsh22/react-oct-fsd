import { useState } from "react";
import styles from "./styles.module.css";

function Whale() {
  const [isDark, setDark] = useState(false);

  function toggle() {
    setDark((old) => !old);
  }

  const backgroundStyles = isDark ? styles["bg-dark"] : "";
  return (
    <>
      <div className={backgroundStyles}>
        <h1>Whale</h1>

        <br />

        <button onClick={toggle}>Toggle darkness</button>
      </div>
    </>
  );
}

export default Whale;
