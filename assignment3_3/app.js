require("dotenv").config();

const express = require("express");

const app = express();
const router = require("./api/router");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api",router);

const server = app.listen(process.env.PORT, () => {
    console.log("Listening to port: ", server.address().port);
});