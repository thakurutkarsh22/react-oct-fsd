import { useDispatch, useSelector } from "react-redux";
import actions from "./actions/actions";

function CounterRedux() {
  const counter = useSelector((storeState) => {
    console.log("store state debug", storeState);
    const { counterReducer } = storeState;
    const { counter } = counterReducer;

    return counter;
  });

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // something ....
    dispatch(actions.increment());
  };

  const decrementHandler = () => {
    dispatch(actions.decrement());
  };

  const addWithHandler = () => {
    dispatch(actions.addWith(5));
  };

  return (
    <>
      <div>Counter</div>

      <h2>{counter}</h2>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={addWithHandler}>AddWith</button>
    </>
  );
}

export default CounterRedux;
