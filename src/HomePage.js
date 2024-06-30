import axios from "axios";
import React from "react";

import { useLoaderData } from "react-router-dom";
import MovieCard from "./components/MovieCard/MovieCard";
import styles from './HomePage.module.css'

export async function loader(){
    const res = await axios.get('http://localhost:3000/movies')
    const data = res.data
    return {data}
}

function HomePage(props){

    const {data} = useLoaderData()
    console.log(data)

    return(
        <>
        <main>
           <section>
            <h2>Latest release</h2>
            <ul className={styles.MoviesList}>
                {
                    data.map((movie, index) => {
                        return <MovieCard key={movie._id} movie={movie}/>
                    })
                }
            </ul>
           </section>
        </main>
        </>
    )
}

export default HomePage;