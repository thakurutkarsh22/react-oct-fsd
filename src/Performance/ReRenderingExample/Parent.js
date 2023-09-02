import React, { useMemo, useState } from "react";
import ChildPerfromance from "./Child";

// bad coding ...
// GLobal (stays always)
// const momoizedOnClickHandler = React.useCallback(() => {
//   setCount((old) => old + 1);
// }, []); // useEffect

function ParentPerfromance() {
  const [count, setCount] = useState(0);

  console.log("render parent");

  const momoizedOnClickHandler = React.useCallback(() => {
    setCount((old) => old + 1);
  }, []); // useEffect

  const memoArr = useMemo(() => [1, 2, 3], []);

  // function onClickHandler() {
  //   setCount((old) => old + 1);
  // }

  const arr = [1, 2, 3];

  // abc @ 123 -> render 1 (mouting)
  // def@123 -> render 2 (update)

  return (
    <>
      PARENT
      {count}
      <ChildPerfromance arr={memoArr} onClick={momoizedOnClickHandler} />
      {/* <button onClick={onClickHandler}>onCLick</button> */}
    </>

    // nodes  (Object your have created in memory )
  );
}

export default ParentPerfromance;

//
