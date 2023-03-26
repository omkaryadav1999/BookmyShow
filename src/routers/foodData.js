const express = require("express");
const foodRouter = new express.Router;
const food = require("../model/foodSchema");

foodRouter.post("/food", async (req, resp) => {
    try {
        const ressponse = new food(req.body);
        const data = await ressponse.save();
        resp.send({ message: "data successfully submited" })
    } catch (error) {
        resp.status(400).send(error)
    }
})

foodRouter.get("/food", async (req, resp) => {
    try {
        const response = await food.find({})
        resp.send(response)
    } catch (error) {
        resp.status(400).send(error)
    }
})

module.exports = foodRouter