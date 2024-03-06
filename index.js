const express = require("express");
const app = express();
const cors = require("cors");

const morgan = require("morgan");

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    console.log("API requested");
    res.send("OK");
});

app.listen(port, () => {
    console.log("Server running");
});