import React from "react"
import styles from './Child.module.css'


function Child2(props) {

    const {isIncOrDec = "nutral"} = props;

    return (
        <>
             <div className={styles.container}>
                child 2 


                <h3>{isIncOrDec}</h3>

            </div>

            
        </>
       
    )
}

export default Child2