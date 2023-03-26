const express = require("express");
const loginRegister = new express.Router;
const user = require("../model/register");
const loginUser = require("../model/login");

// create the data

loginRegister.post("/resister", (req, resp) => {

    try {
        // check user alredy register or not
        const { email, password, name } = req.body
        user.findOne({ email: email }).then((item) => {
            console.log(item)
            if (item) {
                resp.send("user alredy register")
            } else {
                const data = new user(req.body);
                data.save()
                resp.status(201).send("register succesfully");
            }
        })
    } catch (error) {
        resp.status(400).send(error);
    }
})

// read the data

loginRegister.post("/login", (req, resp) => {

    try {
        const { email, password } = req.body
        user.findOne({ email: email }).then((item) => {
            if (item) {
                if (password === item.password) {
                    resp.send({ message: "login successfully", item })
                    const data = new loginUser(req.body)
                    data.save()
                } else {
                    resp.send({ message: "password not match plase try again" })
                }
            } else {
                resp.send("user not found")
            }
        })
    } catch (error) {
        resp.status(400).send(error)

    }
})










module.exports = loginRegister