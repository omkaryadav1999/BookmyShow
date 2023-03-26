const express = require("express");
const bookedRouter = new express.Router;
const finalBookedTicket = require("../model/finalTicket");


bookedRouter.post("/finalTicket", async (req, resp) => {
    try {
        let response = new finalBookedTicket(req.body)
        let data = await response.save()
        resp.status(201).send({ message: "your ticket succesfully booked" })

    } catch (err) {
        resp.status(401).send(err)
    }
})


bookedRouter.get("/finalTicket", async (req, resp) => {
    try {
        let response = await finalBookedTicket.find({})
        resp.send(response)
    } catch (err) {
        resp.status(401).send(err)
    }
})

bookedRouter.patch(".finalTicket/:id", async (req, resp) => {
    try {
        let _id = req.body.id
        let response = finalBookedTicket.findByIdAndUpdate(_id, req.body)
        resp.send(response)
    } catch (err) {
        resp.send(err)
    }
})

module.exports = bookedRouter