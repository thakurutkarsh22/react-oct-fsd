import React, { useState } from "react";
import ChildPerfromance from "./Child";

function ParentPerfromance() {
  const [count, setCount] = useState(0);

  console.log("render parent");

  const momoizedOnClickHandler = React.useCallback(() => {
    setCount((old) => old + 1);
  }, []);

  function onClickHandler() {
    setCount((old) => old + 1);
  }

  return (
    <>
      PARENT
      {count}
      <ChildPerfromance onClick={momoizedOnClickHandler} />
      {/* //   <button onClick={}>onCLick</button> */}
    </>
  );
}

export default ParentPerfromance;
