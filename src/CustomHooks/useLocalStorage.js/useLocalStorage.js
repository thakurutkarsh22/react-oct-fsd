import { useEffect, useState } from "react";

function useLocalStorage() {
  const [name, setName] = useState(() => {
    console.log("render in lazy initialization");

    const val = window.localStorage.getItem("name");
    return val ? val : "";
  });

  // localstorage -> api -> side effect

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
