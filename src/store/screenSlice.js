import { createSlice } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        tiers: [],
        selectedSeat: [],
        bookedSeats: [],
        totalPrice: 0,
        selectedShow: null
    },
    reducers: {                         
        addTiers:(state, action) =>{
            state.tiers = action.payload
        },
        selectShow:(state, action) =>{
            state.selectedShow = action.payload
        },
        setBookedSeats:(state, action)=>{
           state.bookedSeats = action.payload
        },
        selectSeat: (state, action) =>{
           console.log(action.payload)
           state.selectedSeat.push(action.payload)

           state.tiers.map((tier) =>{
            tier.rows.map((row) =>{
                if(row.name === action.payload.rowName){
                    const price = tier.price
                  state.totalPrice =state.totalPrice-price
                  
                }
            })
           })
        },
        deselectSeat: (state, action) =>{
            const deselectSeat = action.payload
            state.selectedSeat = state.selectedSeat.filter(selectSeat  =>{
                if(selectSeat.rowName === deselectSeat. rowName && selectSeat.seatNumber === deselectSeat.seatNumber){

                }
                else{
                    return selectSeat
                }
            })
           
            state.tiers.map((tier) =>{
                tier.rows.map((row) =>{
                    if(row.name === action.payload.rowName){
                      
                     
                      
                    }
                })
               })
        }
    }
})

export const {addTiers, selectSeat, selectShow, deselectSeat, setBookedSeats} = screenSlice.actions
export default screenSlice.reducer
