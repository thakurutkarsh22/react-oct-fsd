import React, { useEffect, useRef } from "react";
import Input from "../../Common/Input/Input";
import PortalDialogBox from "../../Portal/Portal";

function FormUi() {
  const nameElement = useRef(null);
  const emailElement = useRef(null);

  let num = 5;

  useEffect(() => {
    console.log("-------------- nameElement ------------- ");
    console.log(nameElement);
    console.dir(nameElement.current);

    // const HtmlInputElement = nameElement.current;
    // HtmlInputElement.focus();

    const htmlEmailInputElement = emailElement.current;
    console.log(htmlEmailInputElement);
    htmlEmailInputElement.focus();
  }, []);

  return (
    <>
      <div>Forms</div>

      {/* <React.forwardRef /> */}

      {/* <input ref={nameElement} type="text" placeholder="Fill the name" /> */}
      {/* <input ref={emailElement} type="text" placeholder="Fill the Email" /> */}

      <Input
        name={"Email"}
        ref={emailElement}
        type="text"
        placeholder="Fill the Email"
      />

      {num === 5 ? (
        <PortalDialogBox title={"i screw up "}> </PortalDialogBox>
      ) : null}
    </>
  );
}

export default FormUi;
