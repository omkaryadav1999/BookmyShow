const express = require("express");
const mongoose = require("mongoose");

const foodData = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    },
    offer: {
        type: String,
        require: true
    }
})

const food = new mongoose.model("food", foodData)

module.exports = food