const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");

const {
    httpGetAllShopData,
    httpCreateProduct,
    httpAddNewProductItem,
} = require("./productCategory.controller");

const shopDataRouter = express.Router();

shopDataRouter.get("/", httpGetAllShopData);
shopDataRouter.post("/createProduct", httpCreateProduct);
shopDataRouter.post("/addProductItem", httpAddNewProductItem);

module.exports = shopDataRouter;
