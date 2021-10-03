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
        callbackURL: "/v1/auth/google/callback",
        clientID: config.CLIENT_ID,
        clientSecret: config.CLIENT_SECRET,
    };

    function verifyCallback(accessToken, refreshToken, profile, done) {
        // console.log("google profile", profile._json);
        done(null, profile._json);
    }

    passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
    serializeGoogleUser();
    deserializeGoogleUser();
    // // save session to cookie
    // passport.serializeUser(async (currentUser, done) => {
    //     console.log("lee user", currentUser);
    //     const userId = currentUser.sub;
    //     const fName = currentUser.given_name;
    //     const lName = currentUser.family_name;
    //     const picture = currentUser.picture;
    //     const email = currentUser.email;
    //     const doesUserExit = await User.exists({ _id: userId });
    //     if (!doesUserExit) {
    //         try {
    //             const newUser = new User({
    //                 _id: userId,
    //                 fName: fName,
    //                 lName: lName,
    //                 profilePicture: picture,
    //                 email: email,
    //             });
    //             await newUser.save();
    //         } catch (error) {
    //             console.log("could not save user");
    //         }
    //     }

    //     done(null, currentUser);
    // });

    // const User = require("../models/user/userData.model");
    // // read session from cookie
    // passport.deserializeUser(async (obj, done) => {
    //     done(null, obj);
    // });

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
