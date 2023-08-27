import { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";

function Watch() {
  const context = useContext(DarkModeContext);

  console.log("context --- watch component", context);

  const { name } = context;
  return <>Hey there watch for {name}</>;
}

export default Watch;
