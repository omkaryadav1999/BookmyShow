
const express = require("express");
const mongoose = require("mongoose");

const AdminRegiste = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
})

const AdminData = new mongoose.model("AdminData", AdminRegiste)
module.exports = AdminData