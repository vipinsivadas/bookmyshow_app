import React from "react";
import styles from './Row.module.css'
import Seats from "../MovieCard/Seats/Seats";

function Row(props) {

    const seatsArray = new Array(props.row.numberOfSeats).fill('avilable');
    return (
        <li className={styles.Row}>
            <h4>{props.row.name}</h4>

            <div className={styles.RowHolder}>
                <ul className={styles.RowSeats}>
                    {
                        seatsArray.map((seat, index) => {
                            return (
                                <Seats key={index} seat={seat} index={index} rowName={props.row.name}/>
                            )
                        })
                    }
                </ul>
            </div>

        </li>
    )
}
export default Row;