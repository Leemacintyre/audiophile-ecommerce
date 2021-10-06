const { createNewItem } = require("../../models/productItem/productItem.model");

async function httpCreateProductItems(req, res) {
    try {
        return res.status(201).json(await createNewItem(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpCreateProductItems" });
    }
}

module.exports = { httpCreateProductItems };
