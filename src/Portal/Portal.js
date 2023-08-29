import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom";

function PortalDialogBox(props) {
  const { title } = props;
  return ReactDOM.createPortal(
    <>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          border: "1px solid black",
          padding: "16px",
        }}
      >
        {title}
      </div>
    </>,
    document.getElementById("portal-container")
  );
}

export default PortalDialogBox;
