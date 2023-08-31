import React from "react";

function ChildPerfromance(props) {
  const { onClick } = props;

  console.log("reder child");
  return (
    <>
      <button onClick={onClick}>onCLick</button>
    </>
  );
}

export default React.memo(ChildPerfromance);

// 1. state chane
// 2. Props change
