const express = require("express");
const {
    httpCreateProductItems,
    httpGetAllProductItems,
    httpUpdateProductItem,
    httpDeleteProductItem,
} = require("./productItem.controller");

const productItemRouter = express.Router();

productItemRouter.get("/", httpGetAllProductItems);
productItemRouter.post("/createProductItem", httpCreateProductItems);
productItemRouter.put("/updateProductItem", httpUpdateProductItem);
productItemRouter.delete("/deleteProductItem", httpDeleteProductItem);

module.exports = productItemRouter;
