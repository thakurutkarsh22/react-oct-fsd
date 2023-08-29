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

const defaultState = {
  counter: 0,
  loading: false,
  name: "utkarsh",
};

// is responsible for State change (police)
function counterReducerFunction() {
  // what instruction we are getting
  // lathi
  // firing
  // ba
}

function CounterReducer() {
  const [val, setVal] = useState(0);

  const [state, dispatch] = useReducer(counterReducerFunction, defaultState);

  return (
    <>
      {state.name}
      <div>Counter: {state.counter}</div>
      <button
        onClick={() => {
          dispatch("Instruction/actions");
        }}
      >
        +1
      </button>
      <button onClick={() => {}}>-1</button>
      <button onClick={() => {}}>Reset</button>
    </>
  );
}

export default CounterReducer;
