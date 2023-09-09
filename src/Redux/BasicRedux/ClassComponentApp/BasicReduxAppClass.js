import { Component } from "react";
import { connect } from "react-redux";
import TOGGLE_ACTION_OBJECT, { LOADING_ACTION_OBJECT } from "../actions/action";

class BasicReduxAppClass extends Component {
  render() {
    console.log("props class debug", this.props);
    return (
      <>
        <div style={{ border: "1px solid black", marginBottom: "50px" }}>
          <div>hello CLass component .......</div>
          <div>
            {this.props.toggle
              ? "Hey I am in Dark mode (true)"
              : "Light Mode (false)"}
          </div>
          <div>
            <button
              onClick={() => {
                this.props.toggleHandler();
                // dispatch
              }}
            >
              Click ME !
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    toggle: store.toggle,
    counter: store.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHandler: (data) => dispatch(TOGGLE_ACTION_OBJECT(data)),
    counterhandler: (data) => dispatch(LOADING_ACTION_OBJECT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicReduxAppClass);
