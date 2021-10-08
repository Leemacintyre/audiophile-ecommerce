const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");

const {
    httpGetAllProducts,
    httpCreateProduct,
    httpAddNewProductItem,
} = require("./productCategory.controller");

const shopDataRouter = express.Router();

shopDataRouter.get("/", httpGetAllProducts);
shopDataRouter.post("/createProduct", httpCreateProduct);
shopDataRouter.post("/addProductItem", httpAddNewProductItem);

module.exports = shopDataRouter;
