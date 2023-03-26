import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function BookTickets() {
    const [getMovie, setGetmovies] = useState([]);
    const params = useParams();
    const navigates = useNavigate()

    const filterMovie = async () => {
        let response = await fetch("http://localhost:5000/movieData")
        let data = await response.json()
        let filter = data.filter((item) => {
            return item._id === params.id
        })
        setGetmovies(filter)
    }

    useEffect(() => {
        filterMovie()
    }, [params.id])
    console.log(getMovie)
    return (
        <>
            <div className="selectMovieContainer">
                {
                    getMovie.map((item) => {
                        const { image, _id, movie_name, language, Genres, Rating, poster } = item
                        return <div key={_id}>

                            <div className="bigPoster" style={{ backgroundImage: `url(${poster})`, paddingLeft: "8px", width: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "600px", marginLeft: "160px" }}>
                                    <div style={{ width: "220px", height: "376px", marginTop: "10px", borderRadius: "5px", border: "1px solid white" }}>
                                        <img src={image} style={{ height: "350px", width: "100%" }} />
                                        <p style={{ borderBottom: "0px", backgroundColor: "black", borderTop: "1px solid white", color: "white", width: "100%", textAlign: "center" }}>In cenams</p>
                                    </div>
                                    <div style={{ width: "350px", paddingTop: "25px", color: "white" }}>
                                        <h1>{movie_name}</h1><br /><br />
                                        <h2>⭐ {Rating}/10</h2><br /><br />
                                        <span>Genres:{Genres}</span>&nbsp;&nbsp;<span>language:{language}</span><br /><br />
                                        <button style={{ backgroundColor: "rgb(248, 68, 100)", border: "1px solid rgb(248, 68, 100)", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 8px", color: "rgb(255, 255, 255)", borderRadius: "8px", padding: "20px", width: "250px", cursor: "pointer" }} onClick={() => navigates(`/theater/${movie_name}`)}>BookTickets</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )
}

export default BookTickets