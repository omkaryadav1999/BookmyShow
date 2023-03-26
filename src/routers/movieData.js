const express = require("express");
const movieRouter = new express.Router;
const movieCollection = require("../model/movieSchema");


movieRouter.post("/movieData", async (req, resp) => {
    try {
        const response = new movieCollection(req.body)
        const data = await response.save()
        resp.status(201).send({ message: "movie tickite successfully uplode", data })
    } catch (error) {
        resp.status(400).send(error)
    }
})

movieRouter.get("/movieData", async (req, resp) => {
    try {
        const response = await movieCollection.find({})
        resp.send(response)
        console.log("response", response)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = movieRouter