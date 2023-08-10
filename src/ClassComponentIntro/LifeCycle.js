import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    console.log("constructor");
  }

  //   useEffect
  componentDidMount() {
    console.log("componentDidMount");
  }

  clickHandler = () => {
    this.setState((prevState) => ({ num: prevState.num + 1 }));
  };

  render() {
    console.log("render");

    return (
      <>
        <button onClick={this.clickHandler}>Change the state</button>
        {this.state.num}
      </>
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
