const passport = require("passport");

function signInWithGoogleStart() {
    return passport.authenticate("google", {
        scope: ["email", "profile"],
    });
}
if (process.env.NODE_ENV === "production") {
    function signInWithGoogleCallback() {
        return passport.authenticate("google", {
            failureRedirect: "/failure",
            successRedirect: "https://the-dealer-portal.herokuapp.com/",
            session: true,
        });
    }
} else {
    function signInWithGoogleCallback() {
        return passport.authenticate("google", {
            failureRedirect: "/failure",
            successRedirect: "https://localhost:3000/",
            session: true,
        });
    }
}

module.exports = { signInWithGoogleStart, signInWithGoogleCallback };
