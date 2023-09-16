import { useDispatch, useSelector } from "react-redux";
import { actionUndoRedoRedux } from "./store";
import { ActionCreators } from "redux-undo";

function CounterUndoRedo() {
  const scoreOfCOunter = useSelector((state) => {
    console.log(state, "state debug");
    return state.counterReducer.present.value;
  });

  const dispatch = useDispatch(); // road .....

  return (
    <>
      <div>Counter undo redo</div>
      <div>Counter: {scoreOfCOunter}</div>

      <button onClick={() => dispatch(actionUndoRedoRedux.increment())}>
        +1
      </button>
      <button onClick={() => dispatch(actionUndoRedoRedux.decrement())}>
        -1
      </button>
      <button onClick={() => dispatch(actionUndoRedoRedux.addWith())}>
        add with
      </button>
      <button onClick={() => dispatch(ActionCreators.undo())}>Undo</button>
      <button onClick={() => dispatch(ActionCreators.redo())}>Redo</button>
    </>
  );
}

export default CounterUndoRedo;
