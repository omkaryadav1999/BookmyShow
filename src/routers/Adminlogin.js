const express = require("express");
const AdminRouter = new express.Router;
const Admin = require("../model/Admin");

AdminRouter.post("/AdminRegistraion", (req, resp) => {
    try {
        const { email, password, name } = req.body
        Admin.findOne({ email, password }).then((item) => {
            if (item) {
                resp.send("user alredy register")
            } else {
                const data = new Admin(req.body);
                data.save()
                resp.status(201).send("register succesfully");
            }
        })
    } catch (error) {
        resp.status(400).send(error);
    }
})



AdminRouter.post("/Admin", (req, resp) => {

    try {
        const { email, password } = req.body
        Admin.findOne({ email: email }).then((item) => {
            if (item) {
                if (password === item.password) {
                    resp.send({ message: "login successfully", item })
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


module.exports = AdminRouter