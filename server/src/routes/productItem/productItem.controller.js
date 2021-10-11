const {
    createNewItem,
    getAllProductItems,
    updateProductItem,
} = require("../../models/productItem/productItem.model");

async function httpCreateProductItems(req, res) {
    try {
        return res.status(201).json(await createNewItem(req, res));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpCreateProductItems" });
    }
}

async function httpGetAllProductItems(req, res) {
    try {
        console.log("httpGetAllProductItems");
        return res.status(200).json(await getAllProductItems(req, res));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllProductItems" });
    }
}

async function httpUpdateProductItem(req, res) {
    try {
        return res.status(204).json(await updateProductItem(req, res));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpUpdateProductItem" });
    }
}

module.exports = {
    httpCreateProductItems,
    httpGetAllProductItems,
    httpUpdateProductItem,
};
