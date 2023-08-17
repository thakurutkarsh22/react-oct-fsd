import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    console.log("constructor");
  }

  //   useEffect -> ONLY WORKS IN MOUNTING PHASE
  componentDidMount() {
    console.log("component Did Mount");
  }

  // useEffect -> ONLY WORKS IN UPDATE PHASE
  componentDidUpdate() {
    console.log("component Did Update");
  }

  // USE EFFECT (return cleanup part) -> ONLY WORKS IN UNMOUNTING PHASE
  componentWillUnmount() {
    // In here you can do clean up...
    console.log("component will unmount");
  }

  clickHandler = () => {
    this.setState((prevState) => ({ num: prevState.num + 1 }));
  };

  render() {
    console.log("render");

    return (
      <div style={{ border: "1px solid black", padding: "16px" }}>
        <button onClick={this.clickHandler}>Change the state</button>
        {this.state.num}

        <br></br>
        <br></br>
        <br></br>
        <div>LICYCLE COPMOnenT</div>
      </div>
    );
  }
}

export default LifeCycle;

// 1. set the variable
// 2. Show the UI (render)
// 3. componentDidMount

//   componentWillUnmount() {
//     console.log("cleanup 1");
//     console.log("cleanup 2");
//     console.log("cleanup 3");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.num !== this.state.num) {
//       console.log("componentDidUpdate");
//     }
//   }
