const express = require("express");

const {
    httpGetAllProducts,
    httpCreateProduct,
    httpDeleteCategoryItem,
} = require("./productCategory.controller");

const shopDataRouter = express.Router();

shopDataRouter.get("/", httpGetAllProducts);
shopDataRouter.post("/createProduct", httpCreateProduct);
shopDataRouter.delete("/deleteCategoryItem", httpDeleteCategoryItem);

module.exports = shopDataRouter;
