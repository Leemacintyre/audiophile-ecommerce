const express = require("express");

const googleAuthRouter = require("./googleAuth/googleAuth.router");
const productCategoryRouter = require("./productCategory/productCategory.router");

const api = express.Router();

api.use("/google", googleAuthRouter);
api.use("/shopData", productCategoryRouter);

module.exports = api;
