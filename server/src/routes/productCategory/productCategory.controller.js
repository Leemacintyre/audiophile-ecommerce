const {
    createNewProduct,
    getAllShopData,
    addNewProductItem,
} = require("../../models/productCategory/productCategory.model");

async function httpGetAllShopData(req, res) {
    try {
        return res.status(200).json(await getAllShopData());
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllShopData" });
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
    httpGetAllShopData,
    httpCreateProduct,
    httpAddNewProductItem,
};
