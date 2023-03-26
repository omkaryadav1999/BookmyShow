const express = require("express")
const mongoose = require("mongoose")

const Tiket = new mongoose.Schema({
    movie_name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    userSelectedTime: {
        type: String,
        require: true
    },
    seats: {
        type: String,
        require: true
    },
    Theater: {
        type: String,
        require: true
    },
    totalTiketPrice: {
        type: Number,
        require: true
    },
    
})

const BookedTikets = new mongoose.model("BookedTikets", Tiket);

module.exports = BookedTikets