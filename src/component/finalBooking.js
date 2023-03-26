import React from "react";
import { useSelector } from "react-redux";


function FinalBooking() {
    const selecytedData = useSelector((state) => state.FinaleReducer[0]);

    return (
        <>
            <div className="finaleTicketBooked">
                <h2>your ticket </h2><br /><br />
                {
                    selecytedData.map((item) => {
                        const { food, foodPrice, language, movie_name, seats, totalTiketPrice, userSelectedTime, total } = item
                        return <div>
                            <h5><b>movie_name: </b>{movie_name}</h5><br />
                            <h5><b>language: </b>{language}</h5><br />
                            <h5><b>seats: </b>{seats}</h5><br />
                            <h5><b>Time: </b>{userSelectedTime}</h5><br />
                            <h5><b>food: </b>{food}</h5><br />
                            <h5><b>foodPriceTotal: </b>Rs.{foodPrice}</h5><br />
                            <h3><b>Total: </b>Rs.{total.toFixed(2)}</h3>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default FinalBooking