const express = require("express");

const shopDataRouter = require("./shopData/shopData.router");

const api = express.Router();

api.use("/shopData", shopDataRouter);

module.exports = api;
