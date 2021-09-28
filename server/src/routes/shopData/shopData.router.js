const express = require("express");

const {
    httpGetAllShopData,
    httpCreateProduct,
} = require("./shopData.controller");

const shopDataRouter = express.Router();

shopDataRouter.get("/", httpGetAllShopData);
shopDataRouter.post("/createProduct", httpCreateProduct);

module.exports = shopDataRouter;
