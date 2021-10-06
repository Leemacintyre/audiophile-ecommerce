const {
    createNewItem,
    getAllProductItems,
} = require("../../models/productItem/productItem.model");

async function httpCreateProductItems(req, res) {
    try {
        return res.status(201).json(await createNewItem(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpCreateProductItems" });
    }
}

async function httpGetAllProductItems(req, res) {
    try {
        return res.status(200).json(await getAllProductItems(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllProductItems" });
    }
}

module.exports = { httpCreateProductItems, httpGetAllProductItems };
