const e = require("express");
const express = require("express");
const TiketData = new express.Router;
const BookedTikets = require("../model/TiketSchema");

TiketData.post("/Tiket", async (req, resp) => {
    try {
        const response = new BookedTikets(req.body);
        const data = await response.save();
        resp.status(201).send({ message: "data collected to bakend" })

        console.log("BookedTikets.length")
    } catch (error) {
        resp.status(400).send(error)
    }
})

TiketData.get("/Tiket", async (req, resp) => {
    try {
        const response = await BookedTikets.find({})
        resp.send(response)

    } catch (error) {
        resp.status(400).send(error)
    }
})

module.exports = TiketData