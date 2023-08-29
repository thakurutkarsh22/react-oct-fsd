import React from "react";
function Input2(props, ref) {
  const { name } = props;

  return (
    <>
      <label>{name}</label>
      <input {...props} ref={ref}></input>
    </>
  );
}

export default React.forwardRef(Input2);
