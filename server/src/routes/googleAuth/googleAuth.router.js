const express = require("express");

const googleAuthRouter = express.Router();

googleAuthRouter.get("/google", (req, res) => {});

googleAuthRouter.get("/google/callback", (req, res) => {});

googleAuthRouter.get("/logout", (res, req) => {});

module.exports = googleAuthRouter;
