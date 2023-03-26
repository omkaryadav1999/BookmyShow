const express = require("express")
const mongoose = require("mongoose")

const TiketBook = new mongoose.Schema({
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
    seatNumber: {
        type: Array,
        require: true
    }

})

const finalBookedTicket = new mongoose.model("finalBookedTicket", TiketBook);

module.exports = finalBookedTicket