require("dotenv").config();

const express = require("express");

const gameRouter = require("./api/routes/game.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/games", gameRouter);

const server = app.listen(process.env.PORT, () => {
    console.log("Listening to port: ", server.address().port);
});