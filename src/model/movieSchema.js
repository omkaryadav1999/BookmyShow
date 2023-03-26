const express = require("express")
const mongoose = require("mongoose")

const movieData = new mongoose.Schema({
    movie_name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    cityName: {
        type: String,
        require: true
    },
    Rating: {
        type: String,
        require: true
    },
    morning: {
        type: String,
        require: true
    },
    evening: {
        type: String,
        require: true
    },
    night: {
        type: String,
        require: true
    },
    Theater: {
        type: String,
        require: true
    },
    Genres: {
        type: String,
        require: true
    },
    poster: {
        type: String,
        require: true
    },
    About: {
        type: String,
        require: true
    }
})

const movieCollection = new mongoose.model("movieCollection", movieData)

module.exports = movieCollection