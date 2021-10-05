const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const cookieSession = require("cookie-session");
const {
    deserializeGoogleUser,
    serializeGoogleUser,
} = require("../models/user/userData.model");

function authFlow(app) {
    const config = {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        COOKIE_KEY_1: process.env.COOKIE_KEY_1,
        COOKIE_KEY_2: process.env.COOKIE_KEY_2,
    };

    const AUTH_OPTIONS = {
        callbackURL:
            // :
            //     process.env.NODE_ENV === "production"
            //         "https://the-dealer-portal.herokuapp.com/v1/google/auth/google/callback"
            "/v1/google/auth/google/callback",
        clientID: config.CLIENT_ID,
        clientSecret: config.CLIENT_SECRET,
    };

    function verifyCallback(accessToken, refreshToken, profile, done) {
        // console.log("google profile", profile._json);
        const { sub } = profile;
        console.log(sub);
        done(null, profile._json);
    }

    passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
    serializeGoogleUser();
    deserializeGoogleUser();

    app.use(
        cookieSession({
            name: "session",
            maxAge: 24 * 60 * 60 * 1000,
            keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = { authFlow };
