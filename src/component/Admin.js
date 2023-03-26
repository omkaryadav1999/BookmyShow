import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Admin() {
    const [data, setData] = useState({});
    const getData = (e) => {
        const { name, value } = e.target
        setData((old) => { return { ...old, [name]: value } })
    }

    const submitMovie = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/movieData", data).then((resp) => {
            alert(resp.data.message)
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(data)


    return (
        <div className="adminContainer">
            <h1 className="title">uploade movies</h1><br />
            <form onSubmit={submitMovie}>
                <label htmlFor="movieName"><b>Movie Name:</b></label>
                <input type="text" placeholder="Enter Movie Name" name="movie_name" onChange={getData} /><br />
                <label htmlFor="price"><b>Genres:</b></label>
                <input type="text" placeholder="Genres" name="Genres" onChange={getData} /><br />
                <label htmlFor="poster"><b>Image:</b></label>
                <input type="text" placeholder="image url" name="image" onChange={getData} /><br />
                <label htmlFor="poster"><b>Poster:</b></label>
                <input type="text" placeholder="movie poster url" name="poster" onChange={getData} /><br />
                <label htmlFor="price"><b>Language:</b></label>
                <input type="text" placeholder="Enter Movie language" name="language" onChange={getData} /><br />
                <label htmlFor="price"><b>About:</b></label>
                <input type="text" placeholder="About" name="About" onChange={getData} /><br />
                <label htmlFor="price"><b>Price:</b></label>
                <input type="text" placeholder="About" name="price" onChange={getData} /><br />
                <label htmlFor="price"><b>City Name:</b></label>
                <input type="text" placeholder="city Name" name="cityName" onChange={getData} /><br />
                <label htmlFor="price"><b>Theater Name:</b></label>
                <input type="text" placeholder="city Name" name="Theater" onChange={getData} /><br />
                <label htmlFor="price"><b>Rating:</b></label>
                <input type="text" placeholder="IMDB Rating" name="Rating" onChange={getData} /><br />
                <label htmlFor="price"><b>Show_Time:</b></label>
                <input type="text" name="morning" placeholder="morning show" onChange={getData} /><br />
                <input type="text" name="evening" placeholder="evening show" onChange={getData} /><br />
                <input type="text" name="night" placeholder="night show" onChange={getData} /><br />
                <input type="submit" value="submit" />
            </form>

            <div>
                <NavLink to="/Food">Add Food</NavLink>
            </div>
        </div>
    )
}

export default Admin