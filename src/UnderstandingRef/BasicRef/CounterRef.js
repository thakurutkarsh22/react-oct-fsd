import { useEffect, useRef, useState } from "react";

function CounterRef(props) {
  const [counterVal, setCounterVal] = useState(0);

  //   USE CASES OF useRef();

  //1. UseRef is used to store data without re-rendering
  //2. useRef to get the old State.

  //3. To get aceess to the DOM element (we will see in future).

  //   Introduce Ref...
  const countRef = useRef(null); // can store the Data

  countRef.current = counterVal;

  //   console.log("countRef debug", countRef);

  useEffect(() => {
    countRef.current = counterVal;
  });

  return (
    <>
      OldCount = {countRef.current}
      <br />
      Count: {counterVal}
      <button
        onClick={() => {
          setCounterVal((old) => old + 1);
        }}
      >
        +1
      </button>
    </>
  );
}

export default CounterRef;
