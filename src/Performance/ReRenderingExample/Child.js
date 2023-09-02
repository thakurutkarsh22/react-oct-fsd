import React from "react";

function ChildPerfromance(props) {
  const { onClick, arr } = props;

  console.log("reder child", arr);
  return (
    <>
      <button onClick={onClick}>onCLick</button>
    </>
  );
}

export default React.memo(ChildPerfromance);

// export default ChildPerfromance;

// 1. state chane
// 2. Props change

// React.memo - >it will memoise the whole component
// if (any prop change) -> then render the component again
// else -> Do not do ANYTHING
