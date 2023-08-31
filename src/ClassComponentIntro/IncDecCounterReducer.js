import { useReducer, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("utkarsh");

  function nameHandler() {
    setName("akash");
  }

  function addhandler() {
    setCounter((oldval) => oldval + 1);
  }

  function subhandler() {
    setCounter((oldval) => oldval - 1);
  }

  function resethandler() {
    setCounter(0);
  }

  return (
    <>
      {name}
      <div>Counter: {counter}</div>
      <button
        onClick={() => {
          addhandler();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          subhandler();
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          resethandler();
        }}
      >
        Reset
      </button>
    </>
  );
}

// ---------------- COUNTER REDUCER ------------------------

const defaultState = {
  counter: 0,
  loading: false,
  name: "Calculator action",
};

// ACTIONS Objects ------

const IncrementAction = {
  type: "INCREMENT",
};

const DecrementAction = {
  type: "DECREMENT",
};

const ResetAction = {
  type: "RESET",
};

// is responsible for State change (police)
//  THIS IS REDUCER FUNCTION
function counterReducerFunction(state, action) {
  console.log(state, "oldState");
  switch (action.type) {
    case "INCREMENT": // lathicharge sec 144
      return {
        ...state,
        counter: state.counter + 1,
        name: "Increment",
      };
    case "DECREMENT": // barrigate sec 500
      return {
        ...state,
        counter: state.counter - 1,
        name: "Decrement",
      };

    case "RESET": // shooting // 420
      return {
        ...state,
        counter: 0,
        name: "Reset",
      };

    default:
      return state;
  }
}

function CounterReducer() {
  const [val, setVal] = useState(0);

  //   phone, car, Newpapaer, fax
  const [state, dispatch] = useReducer(counterReducerFunction, defaultState);

  console.log("render");
  return (
    <>
      {state.name}
      <div>Counter: {state.counter}</div>
      <button
        onClick={() => {
          dispatch(IncrementAction); // debugger
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(DecrementAction);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(ResetAction);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default CounterReducer;
