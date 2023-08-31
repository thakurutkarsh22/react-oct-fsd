//  Life cycle of react project .......

import { useEffect, useState } from "react";

// 1. Rendering
// 2. reconciliation
// 3. commit

// When we have setCOunt(5) react on click button will NOT, RE-RENDER the component..

// HOOK use -> , useState, useRef, useRe

//  can we use hooks inside the if block ?
function BasicComponent() {
  //   if (true) {
  //     const [abc, setAbc] = useState(0);
  //   }
  const [count, setCount] = useState(0);
  //   const [count1, setCount1] = useState(0);
  //   const [count2, setCount2] = useState(0);
  //   const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("a");
  });

  useEffect(() => {
    console.log("b");
  });

  console.log("rendering", count);

  return (
    <>
      hey there {count}
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        Click me{" "}
      </button>
    </>
  );
}

export default BasicComponent;
