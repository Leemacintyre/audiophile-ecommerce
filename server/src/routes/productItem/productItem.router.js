const express = require("express");
const {
    httpCreateProductItems,
    httpGetAllProductItems,
} = require("./productItem.controller");

const productItemRouter = express();

productItemRouter.get("/", httpGetAllProductItems);
productItemRouter.post("/createProductItem", httpCreateProductItems);

module.exports = productItemRouter;
