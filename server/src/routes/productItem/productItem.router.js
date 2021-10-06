const express = require("express");
const {
    httpCreateProductItems,
    httpGetAllProductItems,
} = require("./productItem.controller");

const productItemRouter = express();

productItemRouter.post("/", httpGetAllProductItems);
productItemRouter.post("/createProductItem", httpCreateProductItems);

module.exports = productItemRouter;
