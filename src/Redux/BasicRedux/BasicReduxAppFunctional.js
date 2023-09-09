import { useDispatch, useSelector } from "react-redux";
import TOGGLE_ACTION from "./actions/action";

function BasicReduxAppFunctional() {
  // GET the value from Store
  const toggleValue = useSelector((store) => store?.toggle);

  //   Set the Value On Store ....

  const dispatch = useDispatch(); // transport Actionout

  console.log(toggleValue, "toggleValue debug");
  return (
    <>
      <div style={{ border: "1px solid black", marginBottom: "50px" }}>
        <div>hello function component .......</div>
        <div>
          {toggleValue ? "Hey I am in Dark mode (true)" : "Light Mode (false)"}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(TOGGLE_ACTION());
            }}
          >
            Click ME !
          </button>
        </div>
      </div>
    </>
  );
}

export default BasicReduxAppFunctional;
