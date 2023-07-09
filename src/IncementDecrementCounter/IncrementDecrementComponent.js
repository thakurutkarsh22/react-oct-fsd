
// component

import { useState } from "react"

function IncrementDecrementComponent(props) {

    // State -> State variable can Re run the function again from top to bottom 
    // This variable can be shown on the Ui if it changes...
    const [counter, setCounter] = useState(0)



    // variables -> CANT Re-run the function again from top to bottom  
    let number = 0

    const plusButtonHandler = () => {

        setCounter(counter + 1)
       
       
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


// React renders again (re - run the component function) on 2 cases 

// 1. Change in State  -> this is done 
// 2. Change in props -> this is pending 
