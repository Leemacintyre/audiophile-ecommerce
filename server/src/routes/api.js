const express = require("express");
const { checkLoggedIn } = require("../middleware/checkLoggedIn");

const currentUserRouter = require("./currentUser/currentUser.router");
const googleAuthRouter = require("./googleAuth/googleAuth.router");
const productCategoryRouter = require("./productCategory/ProductCategory.router");
const productItemRouter = require("./productItem/productItem.router");

const api = express.Router();

api.use("/currentUser",checkLoggedIn, currentUserRouter);
api.use("/google", googleAuthRouter);
api.use("/products",checkLoggedIn, productCategoryRouter);
api.use("/productItem",checkLoggedIn,productItemRouter);

module.exports = api;
