// Providing -----

import { useState } from "react";
import TODO from "./Todo";
import Watch from "./Watch";
import DarkModeContext from "./context/DarkModeContext";

// Subscribe -------

function ContextApi() {
  const [val, setVal] = useState();
  return (
    <>
      <DarkModeContext.Provider value={{ name: "utkarsh" }}>
        <TODO />
        <Watch />
      </DarkModeContext.Provider>
    </>
  );
}

export default ContextApi;
