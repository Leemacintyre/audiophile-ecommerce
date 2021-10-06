const express = require("express");

const googleAuthRouter = require("./googleAuth/googleAuth.router");
const productCategoryRouter = require("./productCategory/productCategory.router");
const productItemRouter = require("./productItem/productItem.router");

const api = express.Router();

api.use("/google", googleAuthRouter);
api.use("/products", productCategoryRouter);
api.use("/productItem", productItemRouter);

module.exports = api;
