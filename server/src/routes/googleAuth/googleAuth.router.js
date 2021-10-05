const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");
const {
    signInWithGoogleStart,
    signInWithGoogleCallback,
} = require("../../middleware/googleAuthFlow");
const { redirectToHome } = require("./googleAuth.controller");

const googleAuthRouter = express.Router();

googleAuthRouter.get("/auth/google", signInWithGoogleStart());

googleAuthRouter.get("/auth/google/callback", signInWithGoogleCallback());

googleAuthRouter.get("/logout", (req, res) => {
    req.logOut();
    redirectToHome(req, res);
});

googleAuthRouter.get("/checklog", checkLoggedIn, (req, res) => {
    // console.log(process.env);
    return res.send("confirmed");
});

googleAuthRouter.get("/failure", (req, res) => {
    console.log("failed google called us back");
});

module.exports = googleAuthRouter;
