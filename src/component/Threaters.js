import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { ActiongetData } from "../services/Action/Action";
import { useNavigate } from "react-router";
import { actionSeats } from "../services/Action/Action";
import { NavLink } from "react-bootstrap";

function Theater() {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([]);
    const params = useParams();
    const [value, setValue] = useState("1");
    const [icon, setIcon] = useState("")
    const dispatch = useDispatch();
    const navigates = useNavigate()

    const getData = async () => {
        let response = await fetch("http://localhost:5000/movieData");
        let data = await response.json();
        let filter = data.filter((item) => {
            return item.movie_name === params.movie_name

        })
        setData(filter)
    }

    useEffect(() => {
        getData()
    }, [])

    const sendData = (Theaters, time) => {
        let filterTheater = data.find((item) => {
            return item.Theater === Theaters
        })

        filterTheater.userSelectedTime = time

        dispatch(ActiongetData(filterTheater));
        setModal(true)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    useEffect(() => {
        switch (value) {
            case "1":
                setIcon("🛵");
                break;
            case "2":
                setIcon("🛵");
                break;
            case "3":
                setIcon("🛺");
                break;
            case "4":
                setIcon("🚗");
                break;
            case "5":
                setIcon("🚕");
                break;
            case "6":
                setIcon("🚕");
                break;
            case "7":
                setIcon("🚌");
                break;
            case "8":
                setIcon("🚌");
                break;
            case "9":
                setIcon("🚌");
                break;
            case "10":
                setIcon("🚌");
                break;
            default:

        }
    }, [value])
    const getDatas = (e) => {
        setValue(e.target.value)
        let array = document.getElementsByClassName("btnSeats");
        for (let i = 0; i < array.length; i++) {
            if (array[i].value === e.target.value) {
                array[i].style.backgroundColor = "#f84464"
            } else {
                array[i].style.backgroundColor = "white"
            }
        }
        dispatch(actionSeats(e.target.value));

    }

    const SelectSeats = () => {
        navigates(`/seats/${data[0].movie_name}`)
    }
    return (
        <>
            <div>
                <div style={{ height: "100px", paddingLeft: "160px", backgroundColor: "#333545", width: "100%", color: "#f4f4f4", lineHeight: "100px" }}>
                    <h2 style={{ fontSize: "30px", whiteSpace: "nowrap", maxWidth: "70%", fontWeight: "400" }}>{params.movie_name}</h2>
                </div>
                <div className="theaters_container">

                    {
                        data.map((item) => {
                            const { movie_name, Theater, Genres, morning, evening, night, cityName, _id } = item
                            return < div className="theaters" key={_id} >
                                <span>🤍</span>
                                <span>{Theater}</span> &nbsp;&nbsp;
                                {morning ? <button value={`${morning}`} onClick={() => sendData(Theater, morning)} className="btnTime">{morning}</button> : ""} &nbsp;&nbsp;
                                {evening ? <button value={`${evening}`} onClick={() => sendData(Theater, evening)} className="btnTime">{evening}</button> : ""} &nbsp;&nbsp;
                                {night ? <button value={`${night}`} onClick={() => sendData(Theater, night)} className="btnTime">{night}</button> : ""}
                            </div>
                        })
                    }
                </div>

            </div>
            {
                modal && <div className="main" style={{ position: "relative" }}>
                    <div className="modal">
                        <div className="overlay"></div>

                        <div className="modal-content">
                            <h3>How Many Seats?</h3>
                            <div style={{ width: "100%", height: "130px", lineHeight: "120px" }}>
                                {
                                    <h1 className="icon">{icon}</h1>
                                }
                            </div><br />
                            <div style={{ width: "100%", margin: "0  0 15px 0", height: "100px", lineHeight: "100px" }}>
                                <button value="1" className="btnSeats" onClick={getDatas}>1</button>
                                <button value="2" className="btnSeats" onClick={getDatas}>2</button>
                                <button value="3" className="btnSeats" onClick={getDatas}>3</button>
                                <button value="4" className="btnSeats" onClick={getDatas}>4</button>
                                <button value="5" className="btnSeats" onClick={getDatas}>5</button>
                                <button value="6" className="btnSeats" onClick={getDatas}>6</button>
                                <button value="7" className="btnSeats" onClick={getDatas}>7</button>
                                <button value="8" className="btnSeats" onClick={getDatas}>8</button>
                                <button value="9" className="btnSeats" onClick={getDatas}>9</button>
                                <button value="10" className="btnSeats" onClick={getDatas}>10</button>
                            </div>
                            <button className="settingBtn" onClick={() => SelectSeats()}>Select Seats</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Theater