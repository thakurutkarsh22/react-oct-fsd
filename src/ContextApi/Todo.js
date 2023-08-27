import { useContext, useEffect, useState } from "react";
import DarkModeContext from "./context/DarkModeContext";

function TODO() {
  const context = useContext(DarkModeContext);

  console.log("context --- todo", context);

  const { name } = context;

  return <div>TODO component for {name}</div>;
}

export default TODO;
