import React, { useState } from "react"
import styles from './Child.module.css'

function Child1(props) {

    const {child1CommunicationHandler}  = props


    let [counter, setCounter] = useState(0)

    const plusButtonHandler = () => {
        setCounter((oldValCounter) => oldValCounter + 1 )
        child1CommunicationHandler("Increment")
    }
    const minusButtonHandler = () => {
        setCounter((oldCounter) => oldCounter - 1)
        child1CommunicationHandler("Decrement")

    }
    return (
        <>
        <div className={styles.container}>
            
            <button onClick={plusButtonHandler}>+</button>
            <div className={counter < 0 ? styles.counterDanger :  styles.counter}>
                {counter}
            </div>
            <button onClick={minusButtonHandler}>-</button>

            </div>
        </>

    )
}

export default Child1