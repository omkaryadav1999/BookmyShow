import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";



function Adminlogin({ loginAdmin }) {
    const [loginData, setLoginData] = useState({});
    const navigates = useNavigate()

    const getData = (e) => {
        const { name, value } = e.target
        setLoginData((old) => { return { ...old, [name]: value } })
    }

    const validation = () => {
        let value = true;
        if (loginData.email == "" || loginData.email == null && loginData.password == "" || loginData.password == null) {
            value = false
            alert("plase fill all required fileds")
        }
        return value
    }

    const login = (e) => {
        e.preventDefault();
        if (validation()) {
            axios.post("http://localhost:5000/Admin", loginData).then((res) => {
                alert(res.data)
                loginAdmin(res.data.item);
                navigates("/admin")
            }).catch((error) => {
                alert(error)
            })
        }
    }

    return (
        <>
            <div className="formContainer" >
                <div className="formDiv">
                    <form onSubmit={login}>
                        <h2 className="title">Admin Login</h2>
                        <div className="infoCont">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder="Enter your Email" name="email" onChange={getData} /><br /><br />
                        </div>
                        <div className="infoConts">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder="Enter your password" name="password" onChange={getData} /><br /><br />
                        </div>
                        <input type="submit" value="submit" /> <br />
                        <h4>OR</h4>
                        <button type="button" className="registerv" onClick={() => navigates("/adminRegistration")}>Register</button>
                    </form>
                </div>
            </div>

        </>
    )

}

export default Adminlogin