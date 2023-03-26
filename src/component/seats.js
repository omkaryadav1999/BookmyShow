import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTime, updateSeat } from "../services/Action/Action";
import axios from "axios";
import { useNavigate, useParams } from "react-router";


function Seats() {
    const params = useParams()
    const [bool, setBool] = useState(true);
    const [pre, setPre] = useState([]);
    const data = useSelector((state) => state.Reducer);
    const dispatch = useDispatch();
    const [tickitCount, setTickitCount] = useState(0);
    const [obj, setObj] = useState({});
    const navigates = useNavigate();
    const [seatArray, setSeatArray] = useState([]);
    const [fetchData, setFetchData] = useState([]);

    const sendData = (time) => {
        dispatch(updateTime(time))
    }

   

    const getCount = (e) => {
        setPre((old) => { return [...old, e.target.value] })
        let uni = [...new Set(pre)]
        let array = document.getElementsByClassName("seatbtn");
        for (let i = 0; i < array.length; i++) {
            for (let k = 0; k < pre.length; k++) {
                if (pre[k] === e.target.value) {
                    if (array[i].value === e.target.value) {
                        if (bool) {
                            array[i].style.backgroundColor = "green"
                            setBool(false)
                        } else {
                            array[i].style.backgroundColor = "white"
                            setBool(true)
                        }
                    }
                } else {
                    if (array[i].value === e.target.value) {
                        array[i].style.backgroundColor = "green"
                    }
                }
            }
        }
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].style.backgroundColor === "green") {
                newArr.push(array[i])
            }
        }
        setTickitCount(newArr.length)

        if (Number(data[0].seats) === newArr.length) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].style.backgroundColor === "green") {
                    array[i].disabled = false
                    setSeatArray((old) => { return [...old, array[i].value] })

                } else {
                    seatArray.pop()
                    array[i].disabled = true
                }
            }
        } else {
            for (let i = 0; i < array.length; i++) {
                array[i].disabled = false
            }
        }
    }


    const sendDataToBackend = async (e) => {
        e.preventDefault()
        dispatch(updateSeat(seatArray))

        const totalTiketPrice = Number(data[0].seats) * data[0].price
        const { seats, Theater, userSelectedTime, movie_name, price, language } = data[0]
        let response = await fetch("http://localhost:5000/Tiket", {
            method: "POST",
            body: JSON.stringify({
                seats, Theater, userSelectedTime, movie_name, price, language, totalTiketPrice
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then((item) => {
            console.log(item)
        })


        if (fetchData.length !== 0) {
            let update = fetchData.map((item) => {
                if (item) {
                    return {
                        ...item,
                        seatNumber: item.seatNumber.concat(seatArray)
                    }
                }
            })
            dispatch(updateSeat(update[fetchData.length - 1].seatNumber))
        }
        navigates("/payment")
    }

    const callApi = async () => {
        let response = await fetch("http://localhost:5000/finalTicket");
        let data = await response.json()
        setFetchData(data)
    }
    useEffect(() => {
        callApi()
    }, [])


    const disabledSeat = () => {
        let array = document.getElementsByClassName("seatbtn");
        for (let i = 0; i < array.length; i++) {
            for (let k = 0; k < fetchData[fetchData.length - 1].seatNumber.length; k++) {
                if (array[i].value === fetchData[fetchData.length - 1].seatNumber[k]) {
                    array[i].disabled = true
                    array[i].style.border = "1px solid #fcc42d"
                    array[i].style.color = " #fcc42d"
                    array[i].style.backgroundColor = " #fff"
                    array[i].style.boxShadow = " inset 0 0 3px 3px #fcc42d"
                }
            }
        }
    }

    useEffect(() => {
        if (fetchData.length !== 0) {
            disabledSeat()
        }

    }, [fetchData])

    console.log(params)
    return (
        <>
            <div className="seats_container">
                {data.map((item) => {
                    const { movie_name, Theater, morning, evening, night, userSelectedTime, _id, seats, price } = item
                    return <div className="movieDatails" key={_id}>
                        <div className="movieHeader">
                            <h1>{movie_name}</h1>
                            <h4>{Theater}|{new Date().toDateString()},{userSelectedTime}</h4>
                        </div>
                        < div className="theaters"  >
                            {morning ? <button onClick={() => sendData(morning)} className="btnTime">{morning}</button> : ""} &nbsp;&nbsp;
                            {evening ? <button onClick={() => sendData(evening)} className="btnTime">{evening}</button> : ""} &nbsp;&nbsp;
                            {night ? <button onClick={() => sendData(night)} className="btnTime">{night}</button> : ""}
                        </div>
                        <div className="btn_continar" >
                            <span>available</span>  <button type="button" id="notBook" className="btnd" disabled="true" ></button><span></span>
                            <span>sold</span>  <button type="button" id="Booked" className="btnd" disabled="true" ></button>
                            <span>selected</span>  <button type="button" id="youSelected" className="btnd" disabled="true" ></button>
                        </div>
                        <div style={{ width: "650px", textAlign: "center", margin: "50px auto" }}>
                            <hr style={{ marginBottom: "15px" }} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                <span >A</span>
                                <div>

                                    <button className="seatbtn btnA" value="A8" name="A" onClick={getCount}>A8</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A7" name="A" onClick={getCount}>A7</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A6" name="A" onClick={getCount}>A6</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A5" name="A" onClick={getCount}>A5</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A4" name="A" onClick={getCount}>A4</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A3" name="A" onClick={getCount}>A3</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A2" name="A" onClick={getCount}>A2</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnA" value="A1" name="A" onClick={getCount}>A1</button><br /><br />
                                </div>
                            </div>

                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                <span >B</span>
                                <div>

                                    <button className="seatbtn btnB" value="B8" name="B" onClick={getCount}>B8</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B7" name="B" onClick={getCount}>B7</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B6" name="B" onClick={getCount}>B6</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B5" name="B" onClick={getCount}>B5</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B4" name="B" onClick={getCount}>B4</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B3" name="B" onClick={getCount}>B3</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B2" name="B" onClick={getCount}>B2</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnB" value="B1" name="B" onClick={getCount}>B1</button><br /><br />
                                </div>


                            </div>


                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                <span >C</span>
                                <div>

                                    <button className="seatbtn btnC" name="C" value="C8" onClick={getCount}>C8</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C7" onClick={getCount}>C7</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C6" onClick={getCount}>C6</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C5" onClick={getCount}>C5</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C4" onClick={getCount}>C4</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C3" onClick={getCount}>C3</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C2" onClick={getCount}>C2</button>&nbsp;&nbsp;
                                    <button className="seatbtn btnC" name="C" value="C1" onClick={getCount}>C1</button><br /><br />
                                </div>


                            </div>

                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                <span >D</span>
                                <div>

                                    <button className="seatbtn" value="D8" onClick={getCount}>D8</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D7" onClick={getCount}>D7</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D6" onClick={getCount}>D6</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D5" onClick={getCount}>D5</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D4" onClick={getCount}>D4</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D3" onClick={getCount}>D3</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D2" onClick={getCount}>D2</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="D1" onClick={getCount}>D1</button><br /><br />

                                </div>

                            </div>

                            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                <span >E</span>
                                <div style={{ width: "auto" }}>
                                    <button className="seatbtn" value="E8" onClick={getCount}>E8</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E7" onClick={getCount}>E7</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E6" onClick={getCount}>E6</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E5" onClick={getCount}>E5</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E4" onClick={getCount}>E4</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E3" onClick={getCount}>E3</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E2" onClick={getCount}>E2</button>&nbsp;&nbsp;
                                    <button className="seatbtn" value="E1" onClick={getCount}>E1</button><br /><br />
                                </div>

                            </div>
                            <hr />
                            <div className="screen" ></div>
                            <p>All Eyes this way plase!</p>
                            {
                                tickitCount === Number(seats) ?
                                    <div className="tiket">
                                        <button className="btntiket" onClick={sendDataToBackend}>Pay Rs. {Number(seats) * price}.00</button>
                                    </div>

                                    : ""
                            }
                        </div>
                    </div>
                })}



            </div>
        </>
    )

}

export default Seats



