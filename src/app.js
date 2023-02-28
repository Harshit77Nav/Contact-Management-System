const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//imoprt
const route = require("./route/routes");

//middleware
app.use(express.json());

//routes
app.use("/",route);


module.exports = app;