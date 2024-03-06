const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan('dev'));

app.get("/", (req, res) => {
    console.log("API requested");
    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server running");
});