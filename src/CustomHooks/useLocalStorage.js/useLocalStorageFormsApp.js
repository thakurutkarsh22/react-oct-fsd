import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

// use state lazy initialization

// expensive work => we need lazy initialization..

//   useState(1);
//   useState(() => {
//     //  some expoensive work
//     return 1
//   })

function UseLocalStorageFormsApp(props) {
  const [name, setName] = useLocalStorage();

  return (
    <>
      Forms
      <br />
      <br />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default UseLocalStorageFormsApp;
