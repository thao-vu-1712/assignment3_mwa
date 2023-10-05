const gameData = require("../data/games.json");

const getAll = (req, res) => {
    console.log("Json Get All Data");
    let offset = 0;
    let size = 5;
    
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }

    if (req.query && req.query.size) {
        size = parseInte(req.query.size);
    }

    const filter = gameData.splice(offset* size, (offset + 1) * size);
    res.status(200).json(filter);
}

module.exports = {
    getAll,
}