import React, { useState } from "react";
import axios from "axios";

function Food() {
    const [data, setData] = useState({})

    const getData = (e) => {
        const { name, value } = e.target;
        setData((old) => { return { ...old, [name]: value } })
    }

    const submitFood = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/food", data).then((resp) => {
            alert(resp.data.message)
        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <>
            <div className="foodForm">
                <h1>Add your Theater food</h1>
                <form onSubmit={submitFood}>
                    <label htmlFor="name"><b>Name:</b></label>
                    <input type="text" name="name" placeholder="Name" onChange={getData} /><br /><br />
                    <label htmlFor="price"><b>Price:</b></label>
                    <input type="text" name="price" placeholder="Price" onChange={getData} /><br /><br />
                    <label htmlFor="poster"><b>Image:</b></label>
                    <input type="text" name="Image" placeholder="Image" onChange={getData} /><br /><br />
                    <label htmlFor="offer"><b>Offer:</b></label>
                    <input type="text" name="offer" placeholder="Offer" onChange={getData} /><br /><br />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default Food