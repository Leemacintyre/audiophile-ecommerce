const express = require("express");
const {
    httpCreateClient,
    httpGetAllClientList,
} = require("./clientList.controller");

const clientListRouter = express.Router();

clientListRouter.get("/", httpGetAllClientList);
clientListRouter.post("/createNewCustomer", httpCreateClient);

module.exports = clientListRouter;
