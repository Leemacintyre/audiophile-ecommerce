const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");

const currentUserRouter = express.Router();
