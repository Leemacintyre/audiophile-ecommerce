const express = require("express");
const { httpCreateProductItems } = require("./productItem.controller");

const productItemRouter = express();

productItemRouter.post("/createProductItem", httpCreateProductItems);

module.exports = productItemRouter;
