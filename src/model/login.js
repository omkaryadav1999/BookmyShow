const expreess = require("express")
const mongoose = require("mongoose")


const login = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const loginUser = new mongoose.model("loginUser", login)

module.exports = loginUser