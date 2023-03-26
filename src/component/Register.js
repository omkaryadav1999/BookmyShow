import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


function Register() {
    const [data, setData] = useState({});
    const navigates = useNavigate();

    const getData = (e) => {
        const { name, value } = e.target
        setData((old) => { return { ...old, [name]: value } })
    }

    const validations = () => {
        let value;

        if (data.name == "" || data.name == null && data.email == "" || data.email == null && data.password == "" || data.password == null && data.password == "" || data.password == null && data.re_password == "" || data.re_password == null) {
            value = false
            alert(`plase fill all required fileds`)
        }

        if (data.password != data.re_password) {
            value = false
            alert("password doesn't match")
        }
        return value = true
    }

    const submitData = (e) => {
        e.preventDefault();

        if (validations()) {
            axios.post("http://localhost:5000/resister", data).then((item) => {
                alert(item.data)
                navigates("/log")
            }).catch((error) => {
                alert(error.message)
            })
        }
    }

    return (
        <div className="registerContainer" >
            <div className="registerDiv">
                <h1 className="title">Users Registration</h1>
                <form onSubmit={submitData}>
                    <label htmlfor="name">Name:</label>
                    <input type="text" placeholder="Enter name" name="name" onChange={getData} /><br /><br />
                    <label htmlfor="email">Email:</label>
                    <input type="email" placeholder="Enter email" name="email" onChange={getData} /><br /><br />
                    <label htmlfor="passowrd">Passowrd:</label>
                    <input type="password" placeholder="Enter password" name="password" onChange={getData} /><br /><br />
                    <label htmlfor="passowrd">Re-Passowrd:</label>
                    <input type="password" placeholder="Re-Enter password" name="re_password" onChange={getData} /><br /><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Register