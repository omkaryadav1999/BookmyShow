const express = require("express");
const loginRegister = require("./routers/logRegister");
const movieCollection = require("./routers/movieData");
const TiketData = require("./routers/TiketData");
const foodRouter = require("./routers/foodData");
const bookedRouter = require("./routers/finalbookedTicket");
const AdminRouter = require("./routers/Adminlogin");
const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json()); //for to get the permission to use the json in  the node js
require("../src/db/connection");
const port = process.env.PORT || 5000;
app.use(AdminRouter);
app.use(loginRegister);
app.use(movieCollection);
app.use(TiketData);
app.use(foodRouter);
app.use(bookedRouter);


app.listen(port, () => {
    console.log(`listing on the port number ${port}`);
})
