
// component
function IncrementDecrementComponent() {

    // variables
    let number = 0

    const plusButtonHandler = () => {
        console.log("Plus increment clicked!!!")
        number = number + 1

        console.log("number debug", number)
    }

    const minusButtonHandler = () => {
        console.log("Minus decrement clicked!!!")
        number = number - 1
        console.log("number debug", number)
    }

    // UI
    return (
        <>
            {/* Incremetn sign */}
            <button onClick={plusButtonHandler}>+</button>

            {/* Label Number */}
            {number}
            {/* Decrement sign */}
            <button onClick={minusButtonHandler}>-</button>
        </>

    )

}


export default IncrementDecrementComponent



// Problem -> I am returning only 1 time from the Function. 

// Solution -> to make sure you are re running the function on EVERY click so that it 
// returns the UPDATED UI 
