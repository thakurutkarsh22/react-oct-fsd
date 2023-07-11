
// component

import { useState } from "react"

function IncrementDecrementComponent(props) {

    // State -> State variable can Re run the function again from top to bottom 
    // This variable can be shown on the Ui if it changes...
    let [counter, setCounter] = useState(0)



    // variables -> CANT Re-run the function again from top to bottom  
    let number = 0

    const plusButtonHandler = () => {
        // counter++; // This is we cant do 

        // setCounter(counter + 5) // this is not 

        for(let i = 0 ;i<1000;i++) {
            // setCounter(counter + 1) // this code will NOT WORK 

            setCounter((oldValCounter) => oldValCounter + 1 ) // this is working 

        }
        
       
       
        // // console.log("Plus increment clicked!!!")
        // number = number + 1

        // console.log("number debug", number)

        //force to run this function again 
    }

    const minusButtonHandler = () => {

        setCounter(counter - 1)

        // console.log("Minus decrement clicked!!!")
        // number = number - 1
        // console.log("number debug", number)
    }

    // UI
    return (
        <>
            {/* Incremetn sign */}
            <button onClick={plusButtonHandler}>+</button>

            {/* Label Number */}
            {counter}
            {/* Decrement sign */}
            <button onClick={minusButtonHandler}>-</button>
        </>

    )

}


export default IncrementDecrementComponent



// Problem -> I am returning only 1 time from the Function. 

// Solution -> to make sure you are re running the function on EVERY click so that it 
// returns the UPDATED UI 


// useState() -> 
/*
    const[state, setState] = useState(0)

    1. Always use setState(someVal)

    2. DONT use setState when your new val is Dependent on the old Val
    ex: setState(state + 1) // this is wrong 

    instead use Callback function 
    setState((oldVal) => oldVal + 1) // this is correct 

    But this 2nd example is a tradeoff for the space i.e it takes more space 
    that is why we should not over use it.

*/


// React renders again (re - run the component function) on 2 cases 

// 1. Change in State  ->
// 2. Change in props -> 
