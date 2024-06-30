import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from './SelectShowPage.module.css'
import dayjs from "dayjs";
import { Link } from "react-router-dom";


export async function loader({ params}){
    const res = await axios.get('http://localhost:3000/movies/'+params.movieId+'/shows')
    const shows = res.data
    return {shows}
}

function SelectShowPage(props) {
    const {shows} = useLoaderData()
    console.log(shows)
    return (
        <main>
            <section>
             <h2>Show Availble</h2>
             <ul className={styles.showsList}>
                {
                    shows.map(show=>{
                        return (
                            <Link to={'/select-seats/'+show._id}>
                            <li key={show._id} className={styles.show}>
                                <span>Screen{show.screen.screenNumber}</span>
                                <span>{dayjs(show.showTime).format('MMM D, h:mm')}</span>
                            </li>
                            </Link>
                       )

                    })
                }
             </ul>
            </section>
        </main>
    )
}

export default SelectShowPage;