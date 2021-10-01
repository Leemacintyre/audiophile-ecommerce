const express = require("express");

const googleAuthRouter = require("./googleAuth/googleAuth.router");
const shopDataRouter = require("./shopData/shopData.router");

const api = express.Router();

api.use("/auth", googleAuthRouter);
api.use("/shopData", shopDataRouter);

module.exports = api;
