const express = require("express");
const app = express();

const morgan = require("morgan");

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get("/", (req, res) => {
    console.log("API requested");
    res.send("OK");
});

app.listen(port, () => {
    console.log("Server running");
});