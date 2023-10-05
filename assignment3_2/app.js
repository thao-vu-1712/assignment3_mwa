require("dotenv").config();

const express = require("express");
const router = require("./api/router");

const app = express();

app.use("/api/assignment2", router);

const server = app.listen(process.env.PORT, () => {
    console.log("Listening to port: ", server.address().port);
});