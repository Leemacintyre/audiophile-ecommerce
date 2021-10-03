const express = require("express");
const { checkLoggedIn } = require("../../middleware/checkLoggedIn");
const {
    signInWithGoogleStart,
    signInWithGoogleCallback,
} = require("../../middleware/googleAuthFlow");
const passport = require("passport");

const googleAuthRouter = express.Router();

googleAuthRouter.get("/auth/google", signInWithGoogleStart());

googleAuthRouter.get(
    "/auth/google/callback",
    signInWithGoogleCallback(),
    (req, res) => {
        console.log("google called us back", res);
    }
);

googleAuthRouter.get("/logout", (req, res) => {
    req.logOut();
    return res.redirect("http://localhost:3000");
});

googleAuthRouter.get("/checklog", checkLoggedIn, (req, res) => {
    return res.send("confirmed");
});

googleAuthRouter.get("/failure", (req, res) => {
    console.log("failed google called us back");
});

module.exports = googleAuthRouter;
