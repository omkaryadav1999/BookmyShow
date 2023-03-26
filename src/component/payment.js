import React, { useState, useEffect } from "react"
import { finalTiketData } from "../services/Action/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";




function Payment() {
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(false);
    const [data, setData] = useState([]);
    const [baseAmount, setBaseAmount] = useState(30.00)
    const [GST, setGst] = useState(2.70);
    const [stateGst, setStateGst] = useState(2.70)
    const [food, SetFood] = useState([])
    const [selectedFood, setSelectedFood] = useState([]);
    const [foodPrice, SetFoodPrice] = useState(0)
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtoal] = useState(0);
    const [value, setValue] = useState(0);
    const navigates = useNavigate();

    const dispatch = useDispatch();


    const foodFetch = async () => {
        const response = await fetch("http://localhost:5000/food");
        const data = await response.json()
        SetFood(data)
    }

    useEffect(() => {
        foodFetch()
    }, [])

    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/Tiket");
        const data = await response.json()
        const unique = [... new Map(data.map((a) => [a.name, a])).values()]
        setData(unique)
        setSubtoal(unique[0].totalTiketPrice + GST + baseAmount + stateGst)
    }
    console.log(subtotal)
    useEffect(() => {
        fetchData()
    }, [])


    const sendData = (_id) => {
        let find = food.find((item) => {
            return item._id === _id
        })
        setSelectedFood((old) => { return [...old, find] });
        let offer = parseFloat(find.offer) / 100
        let discont = Number(find.price) * offer;
        let finale = find.price - discont;
        if (find.offer) {
            SetFoodPrice(foodPrice + finale);
            setTotal(subtotal + Number(foodPrice + finale));
        } else {
            console.log("hello")
            SetFoodPrice(foodPrice + Number(find.price));
            setTotal(subtotal + foodPrice + Number(find.price));

        }
    }

    const deleteData = () => {
        setSelectedFood([])
        setTotal(subtotal)
        setBool(true)
    }

    const payable = () => {

        if (bool) {
            dispatch(finalTiketData(data, selectedFood, foodPrice, subtotal));
        } else {
            dispatch(finalTiketData(data, selectedFood, foodPrice, total));
        }

        navigates("/paymentCart")
    }

    return (
        <>
            <div className="container_Booking">
                <div className="headingBooking">
                    <h3>Grab a Bite!</h3>
                    <p>Prebook Your Meal and Save More!</p>
                    <div className="food_container">
                        {
                            food.map((item) => {
                                const { Image, price, name, offer, _id } = item
                                return <div onClick={() => sendData(_id)} className="foodCart" style={{ width: "150px", height: "auto", border: "1px solid black", margin: "5px 0 10px 0" }}>
                                    <img src={Image} style={{ width: "100%", height: "80px" }} />
                                    <div>
                                        <b>{name}</b><br /><br />
                                        <b>price:Rs.{price}</b><br /><br />

                                        {offer ? <b className="offer">offer:{offer}</b> : ""}<br /><br />

                                    </div>

                                </div>
                            })
                        }

                    </div>
                </div>

                <div className="tiketDetails">
                    <h3 style={{ margin: "25px 0 25px 0", textAlign: "left" }}>BOOKING SUMMARY</h3>
                    {
                        data.map((item) => {
                            const { seats, movie_name, userSelectedTime, totalTiketPrice } = item
                            return <div style={{ marginBottom: "10px" }}>
                                <div style={{ width: "100%", marginBottom: "20px", display: "flex", justifyContent: "space-around" }}> <h5 >Tiket price:</h5> <h5>Rs.{totalTiketPrice}</h5> </div>
                                <div onClick={() => setBool(!bool)} style={{ marginBottom: "20px", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-around" }}><p>{bool ? "🔼" : "🔽"}<b>Convenience fees</b></p><p>Rs.{(baseAmount + GST + stateGst).toFixed(2)}</p> </div>
                                {bool ? <div style={{ marginBottom: "10PX" }}>
                                    <div style={{ width: "100%", marginBottom: "10PX", display: "flex", justifyContent: "space-around" }}><p>baseAmount</p><p>{baseAmount}</p></div>
                                    <div style={{ width: "100%", marginBottom: "10PX", display: "flex", justifyContent: "space-around" }}><p>CenteralGST</p><p>{GST}</p></div>
                                    <div style={{ width: "100%", marginBottom: "10PX", display: "flex", justifyContent: "space-around" }}><p>stateGst:</p><p>{stateGst}</p></div>

                                </div> : ""}
                                <hr></hr>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}><p><b>Sub Total</b></p><p><b>Rs.{subtotal.toFixed(2)}</b></p></div>
                            </div>


                        })

                    }
                    <div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginTop: "35px" }}>
                            <p><b>food&Breverage  </b>{selectedFood ?
                                <button onClick={deleteData} className="del" style={{ backgroundColor: "red", cursor: "pointer" }}>delete</button> : ""}

                            </p> <p>Rs.{foodPrice}</p>
                        </div>


                        {selectedFood.map((item) => {
                            const { price, offer, name } = item
                            return <div>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginTop: "35px" }}>
                                    <p><b>{name}</b>

                                    </p> <p>Rs.{item ? price : ""}</p>
                                </div>

                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                                    <p>offer</p><p>{offer ? offer : "0%"}</p>
                                </div>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                                    <p>final Amount:</p><p><b>Rs.{offer ? price - (parseFloat(offer) / 100 * Number(price)) : price}</b></p>
                                </div>
                            </div>
                        })}
                        <div className="payable" onClick={payable}>
                            <h5>Amount Payable  </h5><p>RS.{selectedFood ? total.toFixed(2) : subtotal.toFixed(2)}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment