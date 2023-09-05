import { useMemo, useState } from "react";

function useToggle(initialValue = false) {
  const [val, setVal] = useState(initialValue);

  const memoToggleFunction = useMemo(() => () => {
    // logging
    // other
    setVal((old) => !old);
  });

  //

  return [val, memoToggleFunction];
}

export default useToggle;

// Inside a custom hooks you can use, React hooks...

// What ever function you are exposing should be memoised otherwise the parent will have unexpected results.
