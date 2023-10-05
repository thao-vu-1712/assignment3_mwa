const schoolData = require("../data/school.json");
const getAll = (req, res) => {
    let offset = 0;
    let size = 3;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }

    if (req.query && req.query.size) {
        size = parseInt(req.query.size);
    }

    let filterData = schoolData.splice(offset* size, (offset + 1) * size);
    res.status(200).json(filterData);
}

const getByIndex = (req, res) => {
    let index = req.params.index;

    console.log(index);
    if (index >= schoolData.length) {
        res.status(400).json({"error": "No data"})
    } else {
        res.status(200).json(schoolData[index]);
    }
}

module.exports = {
    getAll,
    getByIndex
}