const express = require("express");
const { checkLoggedIn } = require("../middleware/checkLoggedIn");

const currentUserRouter = require("./currentUser/currentUser.router");
const googleAuthRouter = require("./googleAuth/googleAuth.router");
const productCategoryRouter = require("./productCategory/ProductCategory.router");
const productItemRouter = require("./productItem/productItem.router");
const clientListRouter = require("./clientList/clientList.router");

const api = express.Router();

api.use("/currentUser", currentUserRouter);
api.use("/google", googleAuthRouter);
api.use("/products", productCategoryRouter);
api.use("/productItem", productItemRouter);
api.use("/clientsList", clientListRouter);

module.exports = api;
