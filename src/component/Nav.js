import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleData } from "../services/Action/Action";

function Nav() {
    const [bool, setBool] = useState(false)
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    const getData = (e) => {
        setData(e.target.value)
        dispatch(singleData(e.target.value))
    }

    const toggle = () => {
        setBool(true)
    }



    return (
        <>
            <div className="navDiv" style={{ width: "100%" }}>

                <div className="logoConatiner">
                    <a href="https://getlogo.net/bookmyshow-logo-vector-svg/" target="_blank"><img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" style={{ width: "100px", height: "70px" }} /></a>

                    <div className="serachConatiner">
                        <input type="search" className="search" placeholder="Search for Movies,Events,plays,Sports and Activities" />
                    </div>
                </div>

                <div className="navBar">
                    <select value={data} onChange={getData} style={{ backgroundColor: " rgb(51, 53, 69)", borderRadius: "none", border: "none", color: "rgb(204, 204, 204)" }}>
                        <option>City</option>
                        <option>pune</option>
                        <option>mumbai</option>
                        <option>Delhi</option>
                        <option>Kolkata</option>
                        <option>Bangluru</option>
                        <option>Hydrabad</option>
                        <option>Chandighar</option>
                    </select>
                    <p className="login"><NavLink to="/log" className="navlink">login</NavLink></p>
                    <div className="btntoggle" onClick={toggle}><i className="bi bi-list"></i></div>

                    {
                        bool ? <div className="transitionDiv" onClick={() => setBool(false)}>
                            <div className="nexttransition"></div>
                            <div className="divRegister">
                                <div></div>
                                <div className="Hey"><p>Hey!</p></div><br />
                                <div className="adminslide">
                                    <p><NavLink to="/register" className="navlinks">Register/singin</NavLink></p><br /><br />
                                    <p><NavLink to="/adminlogin" className="navlinks">Admin/login</NavLink></p>
                                </div>
                            </div>
                        </div>
                            : ""
                    }

                </div>

            </div>
            <div className="parent">
                <ul className="secondNavBar">
                    <li><NavLink to="/movie" className="navlink">Movie</NavLink></li>
                    <li><NavLink to="/" className="navlink">Stream</NavLink></li>
                    <li><NavLink to="/" className="navlink">Events</NavLink></li>
                    <li><NavLink to="/" className="navlink">Plays</NavLink></li>
                    <li><NavLink to="/" className="navlink">Sports</NavLink></li>
                    <li><NavLink to="/" className="navlink">Activities</NavLink></li>
                    <li><NavLink to="/" className="navlink">Buzz</NavLink></li>
                </ul>
                <ul className="secondNavBarx">
                    <li><NavLink to="/" className="navlink">listYourShow</NavLink></li>
                    <li><NavLink to="/" className="navlink">Corporates</NavLink></li>
                    <li><NavLink to="/" className="navlink">Offers</NavLink></li>
                    <li><NavLink to="/" className="navlink">Gift Cards</NavLink></li>
                </ul>
            </div>

        </>
    )
}

export default Nav