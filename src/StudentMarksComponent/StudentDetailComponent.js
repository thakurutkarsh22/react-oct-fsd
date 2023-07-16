import React from "react";
import styles from './StudentDetailComponent.module.css'

function StudentDetail(props) {

    const {name, year, grade} = props;


    // UI
    return (
        <div className={styles.card}>

            <div>{name}</div>
            <div>{year} Year</div>
            <div>{grade < 4 ? `Fail-${grade}` : grade }</div>
        </div>
    )


}

export default StudentDetail;



