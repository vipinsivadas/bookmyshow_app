import React, { useEffect } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Seats from "../components/MovieCard/Seats/Seats";
import Row from "../components/Row/Row";
import Tier from "../components/Tier/Tier";
import styles from './SelectSeats.module.css'
import { useSelector, useDispatch } from "react-redux";
import { addTiers, selectShow, setBookedSeats } from "../store/screenSlice";


export async function loader({ params}){
    const res = await axios.get('http://localhost:3000/shows//'+params.showId)
    const show = res.data
    const showId = params.showId
    const bookingsRes = await axios.get('http://localhost:3000/bookings?show='+showId)
    const bookingsList = bookingsRes.data
    const bookedSeats = []
    bookingsList.map(booking =>{
       booking.selectedSeat.map(seat=>{
        bookedSeats.push(seat)
       })
    })
    return {show, showId, bookedSeats}
}

function SelectSeats (props){
const navigate = useNavigate();
const dispatch = useDispatch()
const {show, showId, bookedSeats} = useLoaderData()
const screen = show.screen
const screenData = useSelector(state=> state.screen)
const totalPrice = useSelector(state=> state.screen.totalPrice)


useEffect(()=>{
  dispatch(addTiers(screen.tiers))
  dispatch(setBookedSeats(bookedSeats))
}, [])

const handleSeatConfirmation = () =>{
   dispatch(selectShow(showId))
   navigate("/booking-summary");
}

    return (
        <main className={styles.SelectSeatMain}>
         <ul className={styles.Tiers}>
              {
                screenData.tiers.map(tier =>{
                    return(<Tier key={tier._id} tier={tier}/>)
                })
              }
         </ul>
         <div className={styles.screenDiv}>&nbsp;</div>
         <div>
           <button onClick={handleSeatConfirmation} className={styles.CheckoutButton} to='/booking-summary'>Pay Rs {totalPrice}</button>

         </div>
        
        </main>
    );
}
 export default SelectSeats;