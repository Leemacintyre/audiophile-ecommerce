const {
    createNewProduct,
    getAllShopData,
} = require("../../models/shopData/shopData.model");

const ShopData = require("../../models/shopData/shopData.mongo");

async function httpGetAllShopData(req, res) {
    try {
        // const shopData = await getAllShopData();
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

module.exports = { httpGetAllShopData, httpCreateProduct };
