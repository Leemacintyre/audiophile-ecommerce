const express = require("express");
const {
    httpCreateProductItems,
    httpGetAllProductItems,
    httpUpdateProductItem,
} = require("./productItem.controller");

const productItemRouter = express();

productItemRouter.get("/", httpGetAllProductItems);
productItemRouter.post("/createProductItem", httpCreateProductItems);
productItemRouter.put("/updateProductItem", httpUpdateProductItem);

module.exports = productItemRouter;
