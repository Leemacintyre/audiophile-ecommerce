const passport = require("passport");

function signInWithGoogleStart() {
    return passport.authenticate("google", {
        scope: ["email", "profile"],
    });
}

function signInWithGoogleCallback() {
    return passport.authenticate("google", {
        failureRedirect: "/failure",
        successRedirect: "https://localhost:8000/",
        session: true,
    });
}

module.exports = { signInWithGoogleStart, signInWithGoogleCallback };
