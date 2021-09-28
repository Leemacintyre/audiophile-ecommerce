const express = require("express");

const {
    httpGetAllShopData,
    httpCreateProduct,
    httpAddNewProductItem,
} = require("./shopData.controller");

const shopDataRouter = express.Router();

shopDataRouter.get("/", httpGetAllShopData);
shopDataRouter.post("/createProduct", httpCreateProduct);
shopDataRouter.post("/addProductItem", httpAddNewProductItem);

module.exports = shopDataRouter;
