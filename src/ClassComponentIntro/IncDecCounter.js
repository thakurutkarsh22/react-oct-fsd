import React from "react";

// TO GET PROPS -> this.props
// TO GET STATE -> this.state

// TO SEt STATE -> 1. INITIALIZATION (constructor), 2. this.setState()

class IncDecCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.name = "abcd";

    // 1st way to set state DONT USE THIS THING ANYWHERE EXCEPT CONSTRUCTOR....

    // INITIALIZE ...
    this.state = {
      counter: 0,
      user: "utkarsh",
    };
  }

  plusButtonHandler() {
    // 1. Update the value of the counter.
    // 2. Force the re-rendering off the component (same as functional Component)
    this.setState((oldValue) => {
      return {
        ...oldValue,
        counter: oldValue.counter + 1,
      };
    });
  }

  minusButtonHandler() {
    this.setState((oldValue) => {
      return {
        ...oldValue,
        counter: oldValue.counter - 1,
      };
    });
  }

  // this is the method responsible for the UI
  render() {
    const { counter, user } = this.state;

    return (
      <>
        {/* Incremetn sign */}
        <button onClick={this.plusButtonHandler.bind(this)}>+</button>

        {/* Label Number */}
        <div>{counter}</div>

        {/* Decrement sign */}
        <button onClick={this.minusButtonHandler.bind(this)}>-</button>

        {counter < 0 ? (
          <div>Hey there guys you are hitting the negative range</div>
        ) : null}
      </>
    );
  }
}

export default IncDecCounterClass;
