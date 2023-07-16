import { useState } from "react";

function MultipleState() {

    let [counterState, setCounterState] = useState({
        counter: 0,
        IncOrDec: "neutral",
        color: "red"
    })

    const {counter, IncOrDec, color} = counterState

    console.log("debug props", counter, IncOrDec, color)

    // let [counter, setCounter] = useState(0)
    // let [IncOrDec, setIncOrDec] = useState("neutral")
    let number = 0

    const plusButtonHandler = () => {

        setCounterState((oldValCounterObj) => {
            return {
                ...oldValCounterObj, // THIS IS the caveat that dev FORGET, YOu should not Forget.

                counter: oldValCounterObj.counter + 1,
                IncOrDec: "Incremented"
            }
        })

        // setCounter((oldValCounter) => oldValCounter + 1 )
        // setIncOrDec("Incremented")
    }

    const minusButtonHandler = () => {
        setCounterState((oldValCounterObj) => {
            return {
                ...oldValCounterObj,
                
                counter: oldValCounterObj.counter - 1,
                IncOrDec: "Decrementd"
            }
        })


        // setCounter((oldCounter) => oldCounter - 1)
        // setIncOrDec("Decrementd")
    }
    return (
        <>
            <button onClick={plusButtonHandler}>+</button>
            <div>
                {counter}
            </div>
            <button onClick={minusButtonHandler}>-</button>

            {
               IncOrDec 
            }

            <div>COlor: {color}</div>

            {counter < 0 ? (<div>
                Hey there guys you are hitting the negative range
            </div>) : null }
        </>

    )

    
}

export default MultipleState;