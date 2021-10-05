const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");

const {
    httpGetAllShopData,
    httpCreateProduct,
    httpAddNewProductItem,
} = require("./productCategory");

const shopDataRouter = express.Router();

shopDataRouter.get("/", httpGetAllShopData);
shopDataRouter.post("/createProduct", checkLoggedIn, httpCreateProduct);
shopDataRouter.post("/addProductItem", checkLoggedIn, httpAddNewProductItem);

module.exports = shopDataRouter;
