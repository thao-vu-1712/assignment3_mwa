
const multiply = (req, res) => {
    let param = req.params.first;

    let query = 0;
    if (req.query && req.query.second) {
        query = parseInt(req.query.second);
    }
    res.status(200).send(`${param * query}`)
}

module.exports = {
    multiply
}