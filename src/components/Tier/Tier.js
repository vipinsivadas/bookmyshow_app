import React from "react";
import Row from "../Row/Row";
import styles from './Tier.module.css'

function Tier(props) {
    const tier = props.tier
    return (
        <li className={styles.Tier}>
            <h3>{tier.name} - {tier.price}Rs</h3>
            <ul className={styles.TierRows}>
                {
                    tier.rows.map(row => {
                        return (
                            <Row row={row} key={row._id} />
                        )
                    })
                }
            </ul>


        </li>
    )
}
export default Tier