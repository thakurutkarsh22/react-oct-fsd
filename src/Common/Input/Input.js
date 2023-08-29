import React from "react";
import styles from "./Input.module.css";
import Input2 from "./Input2";
// import Input2 from "./Input2";

function Input(props, ref) {
  const { name } = props;
  return (
    <div className={styles.beauty}>
      <Input2 {...props} ref={ref} />
    </div>
  );
}

// const Input2 = React.forwardRef((props, ref) => {
//   const { name } = props;
//   return (
//     <>
//       <label>{name}</label>
//       <input {...props} ref={ref}></input>
//     </>
//   );
// });

export default React.forwardRef(Input);
