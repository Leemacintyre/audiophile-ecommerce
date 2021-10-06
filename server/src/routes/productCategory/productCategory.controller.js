const {
    createNewProduct,
    getAllProducts,
    addNewProductItem,
} = require("../../models/productCategory/productCategory.model");

async function httpGetAllProducts(req, res) {
    try {
        return res.status(200).json(await getAllProducts());
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllProducts" });
    }
}

async function httpCreateProduct(req, res) {
    try {
        return res.status(201).json(await createNewProduct(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "createNewProduct" });
    }
}

async function httpAddNewProductItem(req, res) {
    try {
        return res.status(201).json(await addNewProductItem(req));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "createNewProductItem" });
    }
}

module.exports = {
    httpGetAllProducts,
    httpCreateProduct,
    httpAddNewProductItem,
};
