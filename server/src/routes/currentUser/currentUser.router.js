const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");
const { httpGetCurrentUser } = require("./currentUser.controller");

const currentUserRouter = express.Router();
//
currentUserRouter.get("/", httpGetCurrentUser);
// (req, res) => {
//     res.send(req.user);}
module.exports = currentUserRouter;
