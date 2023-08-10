import { useEffect, useState } from "react";

function HooksExplained(props) {
  const [num, setNum] = useState(0);

  console.log("render");

  //   Flavour1. useEffect with NO DEPENDENCY. (all phases)

  useEffect(() => {
    console.log("inside use effect");

    // It will only work on DESTRUCTION
    return () => {
      console.log("cleanup 1");
    };
  });

  //   Flavour 2 useEffect with BLANK DEPENDENCY (Mounting, unmounting)

  useEffect(() => {
    console.log("inside use effect 2");

    // It will only work on DESTRUCTION
    return () => {
      console.log("cleanup 2");
    };
  }, []);

  //   Flovour 3 useEffect with DEPENDENCY (Mounting, unmounting, updating)

  useEffect(() => {
    console.log("inside use effect 3");

    // It will only work on DESTRUCTION
    return () => {
      console.log("cleanup 3");
    };
  }, [num]);

  console.log("render 2");

  function abc() {
    setNum((old) => old + 1);
  }

  return (
    <>
      <button onClick={abc}>Change the state</button>
      {num}
    </>
  );
}

export default HooksExplained;

// FUNCTIONAL COMPONENT

// 1. Set the variable (on top of function)
// 2. show the UI (return)
// 3. useEffect // 3 flavours (No depn, Blank Depen [], Dependency [something])

// CLASS COMPONENT

// 1. set the variable  (constructor)
// 2. Show the UI (render)
// 3. componentDidMount ()(this is behaving LIKE USE EFFECT ) ---> flavour 2 (blank dependency)
