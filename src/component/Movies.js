import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

function Movie() {
    const selectData = useSelector((state) => state.SingleReducer)
    const [bool, setBool] = useState(false);
    const [genBool, setGenBool] = useState(false);
    const [formatBool, setFormatBool] = useState(false);
    const [movies, setMovies] = useState([]);
    const [language, setLanguage] = useState("");
    const [geners, setGenres] = useState("")

    const getMovies = async () => {
        let response = await fetch("http://localhost:5000/movieData")
        let data = await response.json()
        let filterData = data.filter((item) => {
            return item.cityName === selectData[0]
        })
        console.log("filterData", filterData)
        if (selectData[0]) {
            setMovies(filterData)

        } else {
            setMovies(data)
        }


    }

    useEffect(() => {
        getMovies()
    }, [selectData])


    const selectBylang = (e) => {
        setLanguage(e.target.value)
    }
    const selectGenres = (e) => {
        setGenres(e.target.value)
    }
    const format = (e) => {

    }

    console.log(selectData)
    return (

        <div className="movieParent" >

            <div>
                <h2>Filters</h2>
                <div className="filterDiv" style={{ width: "350px", height: "auto" }} >
                    {
                        bool ? "➖" : " ➕"
                    }
                    <p onClick={() => setBool(!bool)} style={{ padding: "15px", width: "180px", backgroundColor: "white", borderRedius: "5px", color: "red", boxShadow: "2px 2px 2px wheat", textAlign: "center" }}>languages</p>
                    {
                        bool ? <div style={{ width: "180px", backgroundColor: "white", marginTop: "15px" }}>
                            <button value="English" onClick={selectBylang}>English</button>&nbsp;&nbsp;<button value="Hindi" onClick={selectBylang}>Hindi</button>&nbsp;&nbsp;<button value="marathi" onClick={selectBylang}>Marathi</button><br /><br />
                            <button value="japanese" onClick={selectBylang}>japanese</button>&nbsp;&nbsp;<button value="Telugu" onClick={selectBylang}>Telugu</button>&nbsp;&nbsp;<button value="Tamil" onClick={selectBylang}>Tamil</button><br /><br />
                            <button value="Kannada" onClick={selectBylang}>Kannada</button>&nbsp;&nbsp;<button value="Korean" onClick={selectBylang}>Korean</button>&nbsp;&nbsp;<button value="Punjabi" onClick={selectBylang}>Punjabi</button><br />
                        </div> : ""
                    }
                </div>

                <div className="filterDiv" style={{ width: "350px", height: "auto", marginTop: "15px" }} >
                    {
                        genBool ? "➖" : " ➕"
                    }
                    <p onClick={() => setGenBool(!genBool)} style={{ padding: "15px", width: "180px", backgroundColor: "white", borderRedius: "5px", color: "red", boxShadow: "2px 2px 2px wheat", textAlign: "center" }}>Geners</p>
                    {
                        genBool ? <div style={{ width: "180px", backgroundColor: "white", marginTop: "15px" }}>
                            <button value="Drama" onClick={selectGenres}>Drama</button>&nbsp;&nbsp;<button value="Action" onClick={selectGenres}>Action</button>&nbsp;&nbsp;<button value="Adventure" onClick={selectGenres}>Adventure</button><br /><br />
                            <button value="Romantic" onClick={selectGenres}>Romantic</button>&nbsp;&nbsp;<button value="Thriller" onClick={selectGenres}>Thriller</button>&nbsp;&nbsp;<button value="Comedy" onClick={selectGenres}>Comedy</button><br /><br />
                            <button value="Sci-fi" onClick={selectGenres}>Sci-fi</button>&nbsp;&nbsp;<button value="Crime" onClick={selectGenres}>Crime</button>&nbsp;&nbsp;<button value="Fantasy" onClick={selectGenres}>Fantasy</button><br /><br />
                            <button value="period" onClick={selectGenres}>period</button>&nbsp;&nbsp;<button value="Anime" onClick={selectGenres}>Anime</button>&nbsp;&nbsp;<button value="Bioghraphy" onClick={selectGenres}>Bioghraphy</button><br /><br />
                            <button value="Family" onClick={selectGenres}>Family</button>&nbsp;&nbsp;<button value="Historical" onClick={selectGenres}>Historical</button>&nbsp;&nbsp;<button value="Horror" onClick={selectGenres}>Horror</button><br /><br />
                            <button value="Musical" onClick={selectGenres}>Musical</button>&nbsp;&nbsp;<button value="Mystery" onClick={selectGenres}>Mystery</button>&nbsp;&nbsp;<br /><br /><button value="Psychological" onClick={selectGenres}>Psychological</button>

                        </div> : ""
                    }
                </div>
                <div className="filterDiv" style={{ width: "350px", height: "auto", marginTop: "15px" }} >
                    {
                        formatBool ? "➖" : " ➕"
                    }
                    <p onClick={() => setFormatBool(!formatBool)} style={{ padding: "15px", width: "180px", backgroundColor: "white", borderRedius: "5px", color: "red", boxShadow: "2px 2px 2px wheat", textAlign: "center" }}>Format</p>
                    {
                        formatBool ? <div style={{ width: "180px", backgroundColor: "white", marginTop: "15px" }}>
                            <button value="2D" onClick={format}>2D</button>&nbsp;&nbsp;<button value="4DX" onClick={format}>4DX</button>&nbsp;&nbsp;<button value="IMAX 2D" onClick={format}>IMAX 2D</button>&nbsp;&nbsp;<button value="3D" onClick={format}>3D</button><br /><br />
                            <button value="MAX 4D" onClick={format}>MAX 4D</button>
                        </div> : ""
                    }
                </div>
            </div>


            <div >
                <h2>Movies in ...</h2>
                <div style={{ width: "100%", padding: "20px 0 20px 0", backgroundColor: "#0000", border: "1px solid white", borderRadius: "5px", margin: "10px 0 10px 0" }}>
                    <h2>Coming Soon</h2>
                </div>
                <div className="movieContainer">
                    {
                        movies.map((item) => {
                            const { _id, movie_name, image, price, language } = item
                            return <NavLink style={{ textDecoration: "none", color: "black" }} to={`/BookTickets/${_id}`} key={_id}>
                                < div style={{ width: "220px", height: "auto", boxShadow: "2px 2px 2px white", margin: "5px 0 30px 0" }}>
                                    <img src={image} style={{ width: "220px", height: "350px", borderRadius: "5px", border: "1px solid white" }} />
                                    <div className="body">
                                        <h3><b>{movie_name}</b></h3>
                                        <h4>{language}</h4>
                                    </div>
                                </div>
                            </NavLink>
                        })
                    }
                </div>
            </div>

        </div >
    )

}

export default Movie